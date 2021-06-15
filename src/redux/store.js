import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageUpload';
import signUpReducer from './signup';
import profileReducer from './profile';

export default configureStore({
    reducer:{
        newUpload: imageReducer,
        signUpStore: signUpReducer,
        profile: profileReducer
    }
});