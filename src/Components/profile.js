import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigation } from './navigation';

import { Link } from 'react-router-dom';
import { getProfileData } from '../fetch/profile';
import Slug  from '../images/ucscsammy.jpeg';

import '../styling/profile.scss';
import '../styling/globals.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setProfileImage } from '../redux/imageUpload';

// import Sky from '../images/sky photo.jpg';
// import Nat_1 from '../images/nature_1.jpeg';
// import Nat_2 from '../images/nature_2.jpeg';
// import Nat_3 from '../images/nature_3.jpeg';
// import Nat_4 from '../images/nature_4.jpeg';
// import Nat_5 from '../images/nature_5.jpeg';

// const pics = [Sky, Nat_1, Nat_2, Nat_3, Nat_4, Nat_5];


export const Profile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [apiData, setApiData] = useState({});
    const [images, setImages] = useState();
    // const [bio, setBio] = useState("");
    const dispatch = useDispatch();
    const { _info, username } = useSelector((state) => state.signUpStore);

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, [])

    const getData = async () => {
        const data = await getProfileData(_info.payload);
        setApiData(data)
        if(data["profilePicture"] !== null){ dispatch(setProfileImage(data["profilePicture"])); }
        if(data["postedPhotos"] !== null){ setImages(data["postedPhotos"]); }
        setIsLoading(false);
    }

    if(isLoading){
        return <div className="flex-c spinner">
                <Spinner animation="border" variant="primary"/>
            </div>
    }
    return (
        <div className = "profile">
            <section className="flex-c profile-p-all profile-header">
                <div>
                    <h1>{username.payload}</h1>
                </div>
            </section>

            <section className="flex-sb profile-p-all profile-user">
                <div>
                    {(apiData["profilePicture"] === null) ? 
                    (<img src={Slug} alt="Sammy The Slug" className="profile-pic"/>
                    ) : (
                    <img src={apiData["profilePicture"]} alt="Profile Pic" className="profile-pic"/>)}
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
                <p>{apiData["profileBio"]}</p>
                <hr/>
            </section>

            <section className="profile-uploads">
                <div display="flex-sb">
                    {images !== undefined ? 
                    (images.reverse().map((imgSrc, index) => (<img src={imgSrc} key={index} alt={index}/>))) 
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