import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigation } from './navigation';

import { Link } from 'react-router-dom';

import '../styling/profile.scss';
import '../styling/globals.scss';

import Sky from '../images/sky photo.jpg';
import Nat_1 from '../images/nature_1.jpeg';
import Nat_2 from '../images/nature_2.jpeg';
import Nat_3 from '../images/nature_3.jpeg';
import Nat_4 from '../images/nature_4.jpeg';
import Nat_5 from '../images/nature_5.jpeg';

import { ReactComponent as Gear } from '../svg/gear.svg';

const pics = [Sky, Nat_1, Nat_2, Nat_3, Nat_4, Nat_5];


export const Profile = () => {
    return (
        <div className = "profile">
            <section className="flex-sb profile-p-all profile-header">
                <div>
                    <h1>UserName</h1>
                </div>
                <div><Button variant="link"> <Gear/></Button></div>
            </section>

            <section className="flex-sb profile-p-all profile-user">
                <div>
                    <img src={Sky} alt="Profile Pic" className="profile-pic"/>
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
                    >Edit Profile</Button>
                </Link>
            </section>

            <section className="p-tb profile-bio">
                <p>"Lorem ipsum dolor sit amet, consectetur scing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua.</p>
            </section>

            <section className="profile-uploads">
                <div display="flex-sa">
                    {pics.map((imgSrc, index) => (<img src={imgSrc} key={index} alt={index}/>))}
                </div>
            </section>

            <div className="profile-nav">
                <Navigation/>
            </div>
        </div>
    )
}