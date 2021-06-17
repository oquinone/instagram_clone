import React, { useState } from 'react';
import { Button, Navbar, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { updateUserInfo } from '../fetch/settings';
import { change } from '../helper/settings';
import { useSelector } from 'react-redux';

import '../styling/settings.scss';
import '../styling/globals.scss';
import { ReactComponent as Cancel } from '../svg/cancel.svg'
import { ReactComponent as Save } from '../svg/save.svg'

export const Settings = () => {
    const { profilePhoto } = useSelector((state) => state.profile);
    // const { _info } = useSelector((state) => state.signUpStore);
    const [profilePic, setProfilePic] = useState(profilePhoto.payload);
    const [bio, setBio] = useState("");
    const [username, setUsername] = useState("");

    const update = () => { updateUserInfo(username, bio, profilePic); }

    const changeProfileImage = async (e) => {
        const newImage = await change(profilePic, e.target.files[0]);
        if(newImage) { setProfilePic(newImage); }
    }

    return(
        <div className="settings">
            <Navbar className=" flex-sb settings-nav"> 
                <Link to="/profile">
                    <Cancel fill="white"/>
                </Link>
                <h1> Edit Profile</h1>
                <Link to="/profile">
                    <Save fill="white" onClick={() => update()}/>
                </Link>
            </Navbar>

            <div className="flex-c settings-body">
                <div>
                    <label 
                    htmlFor="profilePicture-input">
                        <h2>Change Profile Photo</h2>
                        {profilePic !== undefined ? 
                        ( <Image src={profilePic} className="pic" thumbnail/>) 
                        : 
                        ( null )
                        }
                    </label>

                    <input 
                    id="profilePicture-input" 
                    type="file" 
                    name="upfile" 
                    accept="image/*"
                    className="profilePicture-input" 
                    onChange={e => changeProfileImage(e)} />
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