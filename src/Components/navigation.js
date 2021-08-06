import React, { useState }  from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//Imported Functions
import { convertBase64 } from '../helper/settings';
import { logout } from '../fetch/logout'; 

//Redux
import { useDispatch } from 'react-redux';
import { setImage, isUploaded, setUploadedImage } from '../redux/imageUpload';

//Styling & Images
import '../styling/navigation.scss';
// import { ReactComponent as Home } from '../svg/home.svg';
import { ReactComponent as Upload } from '../svg/upload.svg';
// import { ReactComponent as LikesSVG } from '../svg/likes.svg';
import { ReactComponent as Profile} from '../svg/profile.svg';
import { ReactComponent as Off} from '../svg/power-outline.svg';

export const Navigation = () => {
    // Used to instantiate reducers ( functions ) in redux store
    const dispatch = useDispatch();
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const onFileChange = async (e) => {
        e.preventDefault();
        const { files } = e.target;
        const localImageUrl = (URL.createObjectURL(files[0]));
        dispatch(setImage(localImageUrl));
        const b64Image = await convertBase64(files[0]);
        dispatch(setUploadedImage(b64Image));
        dispatch(isUploaded(true));
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

    return (
    <nav className="flex-c navigation">
       
            {/* <Upload fill="black"/> */}
            
        <Button 
        variant="link" 
        size="lg" 
        type="file"
        className="nav-btn"> 
            <label 
            htmlFor="navigation-input">
                <Upload fill="black"/>
            </label>

            <input 
            id="navigation-input" 
            type="file" 
            name="upfile" 
            accept="image/*"
            className="navigation-input" 
            onChange={e => onFileChange(e)} />
        </Button>

        <Link 
        to="/profile" 
        className="nav-btn"> 
            <Profile fill="black" /> 
        </Link>

        <div>
            <Off 
            fill="black" 
            onClick={() => signOut()} 
            className="nav-btn"/>
        </div>
    </nav>
    );
}

