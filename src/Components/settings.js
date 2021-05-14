import React, { useState } from 'react';
import { Button, Navbar, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styling/settings.scss';
import '../styling/globals.scss';

import { ReactComponent as Cancel } from '../svg/cancel.svg'
import { ReactComponent as Save } from '../svg/save.svg'
import Sky from '../images/sky photo.jpg';

export const Settings = () => {
    // const [picture, setPicture] = useState();
    const [bio, setBio] = useState("");
    const [username, setUsername] = useState("");

    // useEffect(() => {
    //     // console.log(bio);
    // })

    const updateDB = async () => {
        const url = "http://localhost:5000/edit";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                id: "609d7df80c94a510c2ff6921",
                username: username,
                bio: bio
            })
        }
        fetch(url, options)
        .then(res => res.json())
        .then(data => console.log(data));
    }

    return(
        <div className="settings">
            <Navbar className=" flex-sb settings-nav"> 
                <Link to="/profile">
                    <Cancel fill="white"/>
                </Link>
                <h1> Edit Profile</h1>
                <Link to="/profile">
                    <Save fill="white" onClick={() => updateDB()}/>
                </Link>
            </Navbar>

            <div className="flex-c settings-body">
                <div>
                    <h2>Change Profile Photo</h2>
                    <Image src={Sky} className="pic" thumbnail/>
                </div>
                <div className="btn-container">
                    <hr className="hr"/>
                    <h4 style={{"fontSize": "15px"}}>Dark Mode</h4>
                    <Button className="btn textStyle" variant="light">ON / OFF </Button> 
                </div>
                <Form className="textarea">
                    <hr className="hr"/>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="textStyle">Username</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={1} 
                        maxLength={15}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <hr className="hr"/>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="textStyle">Bio</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={2} 
                        maxLength={80}
                        placeholder="Tell us about yourself"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}/>
                    </Form.Group>
                    <hr className="hr"/>
                </Form>
            </div>
        </div>
    );
}