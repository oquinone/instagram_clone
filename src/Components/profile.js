import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

//Imported Functions
import { Navigation } from './navigation';
import { getProfileData } from '../fetch/profile';

//Components
import { ProfileUserInfo } from './profileUesrInfo';
import { ProfileBioMobile } from './profileBioMobile';
import { ProfileUploads } from './profileUploads';
import { ProfileFollowersMobile } from './profileFollowersMobile';

// Styling & Images
import '../styling/profile.scss';
import '../styling/globals.scss';

//Redux
import { useDispatch } from 'react-redux';
import { setProfilePicture } from '../redux/profile';

export const Profile = () => {
    const dispatch = useDispatch();
    // const { updateUser,  } = useSelector((state) => state.profile);
    const [pData, setProfileData] = useState(null);
    // const [images, setImages]  = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    useEffect(() => {
        makeRequest();
        // eslint-disable-next-line
    }, [])

    const makeRequest = async () => {
        const data = await getProfileData();

        if(data === "Not Auth"){
            setIsLoggedOut(true);
        }
        else{
            setProfileData(data);
            dispatch(setProfilePicture(data['profilePicture']))
            setIsLoading(false);
        }
        
    }

    if(isLoggedOut){
        return(
            <Redirect to="/" />
        );
    }

    if(isLoading){
        return <div className="flex-c spinner">
                <Spinner animation="border" variant="primary"/>
            </div>
    }

    return (
        <div className = "profile">
            <section className="profile-nav">
                <Navigation/>
            </section>
            <hr/>

            <>
                <ProfileUserInfo 
                profilePicture={pData['profilePicture']} 
                username={pData['username']}
                bio={pData['profileBio']}
                />
            </>

            <>
                <ProfileBioMobile bio={pData['profileBio']}/>
            </>

            <>
                <ProfileFollowersMobile />
            </>

            <>
                <ProfileUploads images={pData['uploadedPhotos']} />
            </>
        </div>
    )
}
