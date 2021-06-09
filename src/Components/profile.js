import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigation } from './navigation';

import { Link } from 'react-router-dom';

import '../styling/profile.scss';
import '../styling/globals.scss';

import { useDispatch } from 'react-redux';
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
    const [apiData, setApiData] = useState();
    const [images, setImages] = useState();
    const dispatch = useDispatch();

    const getAPIData = () => {
        const uid = "60a33f7388b7680ce6292e7e";
        const url = `http://localhost:5000/profile/${uid}`;
        const options = { method: 'GET' }
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setApiData(data)
                setImages(data["postedPhotos"]);
                dispatch(setProfileImage(data["profilePicture"]));
                setIsLoading(false);
            });
    }

    useEffect(() => {
        getAPIData();
        // eslint-disable-next-line
    }, [])

    if(isLoading){
        return <div className="flex-c spinner">
                <Spinner animation="border" variant="primary"/>
            </div>
    }
    return (
        <div className = "profile">
            <section className="flex-c profile-p-all profile-header">
                <div>
                    <h1>{apiData["username"]}</h1>
                </div>
            </section>

            <section className="flex-sb profile-p-all profile-user">
                <div>
                    <img src={apiData["profilePicture"]} alt="Profile Pic" className="profile-pic"/>
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