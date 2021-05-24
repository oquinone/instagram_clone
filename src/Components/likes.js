import React from 'react';
import { Navigation } from './navigation';
import { Button } from 'react-bootstrap';
import '../styling/likes.scss';
import '../styling/globals.scss';

import Pic from '../images/sky photo.jpg';

// New Follower
// Someone LIKED your pic/video
// Someone liked your comment
// Someone commented on your profile/vid
// Friend suggestions?? maybe

const testObj = [
    {
        profileImage: Pic, 
        userName: "Blank_1",
        activityType: 0
}, 
    {
        profileImage: Pic, 
        userName: "Blank_2",
        activityType: 1
},
    {
        profileImage: Pic, 
        userName: "Blank_3",
        activityType: 2
},
    {
    profileImage: Pic, 
    userName: "Blank_4",
    activityType: 3
}]

const textType = [
    "started following you.", //0
    "liked your photo.", //1
    "liked your comment", //2
    "posted a comment: ", //3
]

const activity = (prop) => {
    return (
        <div className="flex-sb activity" key={prop.userName}>
            <div>
                <img alt={prop.userName} src={prop.profileImage} />
            </div>
            <div>
                <h2>{`${prop.userName} ${textType[prop.activityType]}`}</h2>
            </div>
            <div>
                <Button>Follow</Button>
            </div>
        </div>
    )
}

export const Likes = () => {
    return(
        <div className="likes">
            <div className="profile-p-all likes-header">
                <h1>Activity</h1>
            </div>

            {testObj.map(item => activity(item))}

            <div className="likes-nav">
                <Navigation/>
            </div>
        </div>
    )
}
