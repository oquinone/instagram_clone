import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './imageUpload';

export default configureStore({
    reducer:{
        newUpload: imageReducer,
    }
});