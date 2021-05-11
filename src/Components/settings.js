import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../styling/settings.scss';

import { ReactComponent as Cancel } from '../svg/cancel.svg'
import { ReactComponent as Save } from '../svg/save.svg'

export const Settings = () => {
    return(
        <div className="settings">
            <Navbar className=" flex-sb settings-nav"> 
                <Link to="/profile">
                    <Cancel fill="white"/>
                </Link>
                <Link to="/profile">
                    <Save fill="white"/>
                </Link>
            </Navbar>
            <div className="flex-c settings-body">
                <h1>Image will go here</h1>
                <Button className="btn">Dark Mode </Button> 
                <h1>Bio:</h1>  
            </div>
        </div>
    );
}