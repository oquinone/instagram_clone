import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigation } from './navigation';

import { Link } from 'react-router-dom';
import { getProfileData } from '../fetch/profile';
import Slug  from '../images/ucscsammy.jpeg';

import '../styling/profile.scss';
import '../styling/globals.scss';

import { useSelector } from 'react-redux';
import { ReactComponent as Off} from '../svg/power-outline.svg';


export const Profile = () => {
    const { username, _info } = useSelector((state) => state.signUpStore);
    const [profileData, setProfileData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    // const { bio, postedPhotos, profilePhoto } = useSelector((state) => state.profile);
    // eslint-disable-next-line
    // const [uploads, setUploads] = useState(postedPhotos.payload);

    useEffect(() => {
        makeRequest();
        // eslint-disable-next-line
    }, [])

    const makeRequest = async () => {
        const data = await getProfileData(_info.payload);
        setProfileData(data);
        setIsLoading(false);
    }

    if(isLoading){
        return <div className="flex-c spinner">
                <Spinner animation="border" variant="primary"/>
            </div>
    }

    return (
        <div className = "profile">
            <section className=" flex-sb profile-p-all profile-header">
                <div></div>
                <div>
                    <h1>{username.payload}</h1>
                </div>
                <div className="logout">
                    <Off fill="white" />
                </div>
            </section>

            <section className="flex-sb profile-p-all profile-user">
                <div>
                    {(profileData['profilePicture'] === undefined) ? 
                    (<img src={Slug} alt="Sammy The Slug" className="profile-pic"/>
                    ) : (
                    <img src={profileData['profilePicture']} alt="Profile Pic" className="profile-pic"/>)}
                </div>
                <div className="profile-stats">
                    <ul className="flex-se">
                        <li> 8 <br/> Post </li>
                        <li> 8 <br/> Followers </li>
                        <li> 5 <br/> Following </li>
                    </ul>
                </div>
            </section>
            
            <section className="p-tb profile-edit">
                <Link to="edit">
                    <Button 
                    variant="secondary" 
                    block size="sm"
                    className="textStyle"
                    >Edit Profile</Button>
                </Link>
            </section>

            <section className="p-tb profile-bio">
                <p>{profileData['profileBio']}</p>
                <hr/>
            </section>

            <section className="profile-uploads">
                <div display="flex-sb">
                    {profileData['uploadedPhotos'] !== undefined ? 
                    (profileData['uploadedPhotos'].map((imgSrc, index) => (<img src={imgSrc} key={index} alt={index}/>))) 
                    : 
                    null}
                </div>
            </section>

            <div className="profile-nav">
                <Navigation/>
            </div>
        </div>
    )
}