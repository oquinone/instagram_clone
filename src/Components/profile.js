import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Navigation } from './navigation';

import { Link } from 'react-router-dom';
// import { getProfileData } from '../fetch/profile';
import Slug  from '../images/ucscsammy.jpeg';

import '../styling/profile.scss';
import '../styling/globals.scss';

import { useSelector } from 'react-redux';
import { ReactComponent as Off} from '../svg/power-outline.svg';


export const Profile = () => {
    const { username } = useSelector((state) => state.signUpStore);
    const { bio, postedPhotos, profilePhoto } = useSelector((state) => state.profile);
    // eslint-disable-next-line
    const [uploads, setUploads] = useState(postedPhotos.payload);

    return (
        <div className = "profile">
            <section className=" flex-sb profile-p-all profile-header">
                <div></div>
                <div>
                    <h1>{username.payload}</h1>
                </div>
                <div className="logout">
                    <Off fill="white"/>
                </div>
            </section>

            <section className="flex-sb profile-p-all profile-user">
                <div>
                    {(profilePhoto.payload === undefined) ? 
                    (<img src={Slug} alt="Sammy The Slug" className="profile-pic"/>
                    ) : (
                    <img src={profilePhoto} alt="Profile Pic" className="profile-pic"/>)}
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
                <p>{bio.payload}</p>
                <hr/>
            </section>

            <section className="profile-uploads">
                <div display="flex-sb">
                    {postedPhotos.payload !== [] ? 
                    (uploads.map((imgSrc, index) => (<img src={imgSrc} key={index} alt={index}/>))) 
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