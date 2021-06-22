import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
// import { Navigation } from './navigation';

import { Link, Redirect } from 'react-router-dom';
import { getProfileData } from '../fetch/profile';
import Slug  from '../images/ucscsammy.jpeg';

import '../styling/profile.scss';
import '../styling/globals.scss';

import { useSelector } from 'react-redux';
import { ReactComponent as Off} from '../svg/power-outline.svg';
import { logout } from '../fetch/logout'; 


export const Profile = () => {
    const { username } = useSelector((state) => state.signUpStore);
    const [profileData, setProfileData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    // const { bio, postedPhotos, profilePhoto } = useSelector((state) => state.profile);
    // eslint-disable-next-line
    // const [uploads, setUploads] = useState(postedPhotos.payload);

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
            setIsLoading(false);
        }
    }

    const signOut = async () => {
        await logout();
        setIsLoggedOut(true);
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
            <section className=" flex-sb profile-p-all profile-header">
                <div></div>
                <div>
                    {username.payload}
                </div>
                <div className="logout">
                    <Off fill="white" onClick={() => signOut()} />
                </div>
            </section>
            <hr/>

            <section className="profile-p-all profile-user">
                <div>
                    {(profileData['profilePicture'] === undefined) ? 
                    (<img src={Slug} alt="Sammy The Slug" className="profile-pic"/>
                    ) : (
                    <img src={profileData['profilePicture']} alt="Profile Pic" className="profile-pic"/>)}
                </div>
                <div className="profile-stats-mobile">
                    <div>
                        <h1>username</h1>
                    </div>
                    <div className="p-tb profile-edit">
                        <Link to="edit">
                            <Button 
                            variant="secondary" 
                            block size="sm"
                            className="textStyle"
                            >Edit Profile</Button>
                        </Link>
                    </div>
                </div>
                <div className="profile-stats">
                    <div className="info">
                        <div className="info-username">
                            <h1>username</h1>
                        </div>
                        <div className="p-tb profile-edit">
                            <Link to="edit">
                                <Button 
                                variant="secondary" 
                                block size="sm"
                                className="textStyle"
                                >Edit Profile</Button>
                            </Link>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="status">
                        <div className="status-flex">
                            <h4>8</h4> 
                            <h5>Post</h5>
                        </div>
                        <div className="status-flex">
                            <h4>9</h4> 
                            <h5>Followers</h5>
                        </div>
                        <div className="status-flex">
                            <h4>10</h4> 
                            <h5>Following</h5>
                        </div>
                    </div>
                    <div className="profile-bio">
                        <p>{profileData['profileBio']}</p>
                    </div>
                </div>

                <div className="extra"></div>
                <div className="extra"></div>
            </section>

            <section className="p-tb profile-bio-mobile">
                <p>{profileData['profileBio']}</p>
            </section>
            {/* <hr/> */}

            <section className="profile-followers-mobile">
                <div className="profile-followers-mobile-flex">
                    <h5>8</h5> 
                    <h5>Post</h5>
                </div>
                <div className="profile-followers-mobile-flex">
                    <h5>9</h5> 
                    <h5>Followers</h5>
                </div>
                <div className="profile-followers-mobile-flex">
                    <h5>15</h5> 
                    <h5>Following</h5>
                </div>
            </section>
            <hr className="profile-followers-mobile-hr"/>

            <section className="profile-uploads">
                <hr/>
                <div className="profile-uploads-flex">
                    {profileData['uploadedPhotos'] !== undefined ? 
                    (profileData['uploadedPhotos'].reverse().map((imgSrc, index) => (<div><img src={imgSrc} key={index} alt={index}/></div>))) 
                    : 
                    null}
                </div>
            </section>

            {/* <div className="profile-nav">
                <Navigation/>
            </div> */}
        </div>
    )
}