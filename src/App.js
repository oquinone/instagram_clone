import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import { Likes } from './Components/likes';
import { Profile } from './Components/profile';
// import { Feed } from './Components/feed';
import { UploadFile } from './Components/modal';
import { Settings } from './Components/settings';

import { useSelector, useDispatch } from 'react-redux';
import { setImage } from './redux/imageUpload';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { uploaded } = useSelector((state) => state.newUpload);
    const { image } = useSelector((state) => state.newUpload);
    const dispatch = useDispatch();

    useEffect(() => {
        if(uploaded) {
            setIsOpen(true);
            // console.log("Enetered");
        }
    }, [uploaded]);
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const formatData = new formatData();
    //     formatData.append('file', image);

    // }

    // const submit = () => {
        
    // }

    const closeModal = () =>{
        dispatch(setImage(""))
        // dispatch(isUploaded(false));
        URL.revokeObjectURL(image.payload);
        setIsOpen(false);
    }

    return (
        <Router>
                <div>
                    <div className="mod">
                        <UploadFile 
                        open={isOpen} 
                        close={closeModal}/> 
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