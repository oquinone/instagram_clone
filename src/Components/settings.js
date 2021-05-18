import React, { useState } from 'react';
import { Button, Navbar, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styling/settings.scss';
import '../styling/globals.scss';

import { ReactComponent as Cancel } from '../svg/cancel.svg'
import { ReactComponent as Save } from '../svg/save.svg'
// import Sky from '../images/sky photo.jpg';
import { useSelector } from 'react-redux';

export const Settings = () => {
    const { profileImage } = useSelector((state) => state.newUpload);
    const [profilePic, setProfilePic] = useState(profileImage.payload);
    const [bio, setBio] = useState("");
    const [username, setUsername] = useState("");

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        })
    }

    const updateDB = () => {
        const url = "http://localhost:5000/edit";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                id: "60a33f7388b7680ce6292e7e",
                username: username,
                bio: bio,
                image: profilePic
            })
        }
        fetch(url, options)
        .then(res => res.json())
        .then(data => console.log(data));
    }

    const changeProfileImage = async (e) => {
        let b64Image; 
        if(profilePic !== undefined) b64Image = await convertBase64(e.target.files[0]);
        setProfilePic(b64Image);
        // console.log(profilePic);
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