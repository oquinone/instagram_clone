import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import { Spinner } from 'react-bootstrap';

import { Likes } from './Components/likes';
import { Profile } from './Components/profile';
// import { Feed } from './Components/feed';
import { UploadFile } from './Components/modal';
import { Settings } from './Components/settings';
import { Login } from './Components/login';
import { Signup } from './Components/signup';
import { uploadNewImage } from './fetch/app';

import { useSelector, useDispatch } from 'react-redux';
import { setImage, setUploadedImage } from './redux/imageUpload';

const App = () => {
    const dispatch = useDispatch();
    // const { _info } = useSelector((state) => state.signUpStore);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { uploaded } = useSelector((state) => state.newUpload);
    const { image, uploadedImage } = useSelector((state) => state.newUpload);

    useEffect(() => {
        if(uploaded.payload) {
            setIsOpen(true);
        }
    }, [uploaded]);

    const submit = async () => {
        setIsLoading(true);
        await uploadNewImage(uploadedImage.payload);
        closeModal();
    }

    const closeModal = (e) =>{
        URL.revokeObjectURL(image.payload);
        dispatch(setImage(""));
        dispatch(setUploadedImage({}));
        setIsOpen(false);
        setIsLoading(false);
    }
    if(isLoading){
        return <div className="flex-c spinner">
                <Spinner animation="border" variant="primary"/>
            </div>
    }
    return (
        <Router>
                <div>
                    <div className="mod">
                        <UploadFile 
                        open={isOpen} 
                        close={closeModal}
                        save={submit}/> 
                    </div> 
                    <Switch>
                        <Route path="/" exact>
                            <Login />
                        </Route>
                        <Route path="/signup" exact>
                            <Signup />
                        </Route>
                        <Route path="/likes" exact>
                            <Likes />
                        </Route>
                        <Route path="/profile" exact>
                            <Profile />
                        </Route>
                        <Route path="/edit" exact>
                            <Settings />
                        </Route>
                    </Switch>
                </div>
        </Router>
    )
}

export default App;