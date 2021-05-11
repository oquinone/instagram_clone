import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styling/navigation.scss';

import { useDispatch } from 'react-redux';
import { setImage, isUploaded } from '../redux/imageUpload';

import { ReactComponent as Home } from '../svg/home.svg';
import { ReactComponent as Upload } from '../svg/upload.svg';
import { ReactComponent as Likes } from '../svg/likes.svg';
import { ReactComponent as Profile} from '../svg/profile.svg';


export const Navigation = () => {
    // Used to instantiate reducers ( functions ) in redux store
    const dispatch = useDispatch();

    // Creates DOMString for image
    // Image is stored in the browers
    // Updates Redux var image w/ URL
    // Able to use URL to retrieve image for displaying
    const onFileChange = (e) => {
        e.preventDefault();
        const { files } = e.target;
        const localImageUrl = (URL.createObjectURL(files[0]));
        dispatch(setImage(localImageUrl));
        dispatch(isUploaded(true));
    }

    return (
    <nav className="flex-se navigation">
        <Link to="/likes">
            <Home 
            fill="white" /> 
        </Link>

        <Button 
        variant="link" 
        size="lg" 
        type="file"> 
            <label 
            htmlFor="navigation-input">
                <Upload 
                fill="white" />
            </label>

            <input 
            id="navigation-input" 
            type="file" 
            name="upfile" 
            accept="image/*"
            className="navigation-input" 
            onChange={e => onFileChange(e)} />
        </Button>

        <Link to="/likes">
            <Likes 
                fill="white" />
        </Link>

        <Link to="/profile"> 
            <Profile 
            fill="white" /> 
        </Link>
    </nav>
    );
}