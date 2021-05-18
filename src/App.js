import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import { Spinner } from 'react-bootstrap';

import { Likes } from './Components/likes';
import { Profile } from './Components/profile';
// import { Feed } from './Components/feed';
import { UploadFile } from './Components/modal';
import { Settings } from './Components/settings';

import { useSelector, useDispatch } from 'react-redux';
import { setImage, setUploadedImage } from './redux/imageUpload';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { uploaded } = useSelector((state) => state.newUpload);
    const { image, uploadedImage } = useSelector((state) => state.newUpload);
    const dispatch = useDispatch();

    useEffect(() => {
        if(uploaded.payload) {
            setIsOpen(true);
        }
    }, [uploaded]);

    const onSubmit = (data) => {
        setIsLoading(true);
        const uid = "60a33f7388b7680ce6292e7e";
        const url = `http://localhost:5000/profile/${uid}`;
        const options = { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                photo: uploadedImage.payload
            }) 
        };
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                closeModal();
            });
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
                        save={onSubmit}/> 
                    </div>
                    <Switch>
                        <Route path="/" exact>
                            <Likes />
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