import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageUpload';
import signUpReducer from './signup';

export default configureStore({
    reducer:{
        newUpload: imageReducer,
        signUpStore: signUpReducer
    }
});