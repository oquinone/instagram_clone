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
import { ImageModal } from './imageDisplay';

// Styling & Images
import '../styling/profile.scss';
import '../styling/globals.scss';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setProfilePicture, setSelectedImage } from '../redux/profile';

export const Profile = () => {
    const dispatch = useDispatch();
    const { selectedImage } = useSelector((state) => state.profile);
    const [pData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        makeRequest();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(selectedImage.payload !== -1 && selectedImage !== -1){
            setOpenModal(true);
            // console.log(pData['uploadedPhotos'][selectedImage.payload]);
        }
    }, [selectedImage])

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

    const closeModal = () => {
        setOpenModal(false);
        dispatch(setSelectedImage(-1));
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
            <>
                <ImageModal 
                open={openModal}
                close={closeModal}
                image={pData['uploadedPhotos'][selectedImage.payload]}/>
            </>
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
