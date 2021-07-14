import React, { useState, useRef, useEffect }  from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Overlay, Popover } from 'react-bootstrap';

//Imported Functions
import { convertBase64 } from '../helper/settings';
import { logout } from '../fetch/logout'; 

//Redux
import { useDispatch } from 'react-redux';
import { setImage, isUploaded, setUploadedImage } from '../redux/imageUpload';

//Styling & Images
import '../styling/navigation.scss';
import { ReactComponent as Home } from '../svg/home.svg';
import { ReactComponent as Upload } from '../svg/upload.svg';
import { ReactComponent as LikesSVG } from '../svg/likes.svg';
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
        <div className="flex-containers"></div>
        <div className="flex-containers"> </div>
        <div className="flex-se flex-containers">
        <Link to="/home">
            <Home  fill="black" /> 
        </Link>

        <Button 
        variant="link" 
        size="lg" 
        type="file"
        className="navigation-btn"> 
            <label 
            htmlFor="navigation-input"
            >
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

        {/* <Link to="/likes">
            <Likes fill="black" />
        </Link> */}
        <div>
            <LikesSVG fill="black" onClick={() => LikesPopover()}/>
        
        </div>

        <Link to="/profile"> 
            <Profile fill="black" /> 
        </Link>
            <Off fill="white" onClick={() => signOut()} />
        </div>
    </nav>
    );
}

const LikesPopover = (e) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null); 

    useEffect(() => {
        setShow(!show);
        setTarget(e.target);
        // eslint-disable-next-line
    }, [show]);

    return(
        <div ref={ref}>
            <Overlay
                show={show}
                target={target}
                placemen="bottom"
                container={ref.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                <Popover.Content>
                    <strong>Holy guacamole!</strong> Check this info.
                </Popover.Content>
                </Popover>
            </Overlay>
        </div>
    );
}