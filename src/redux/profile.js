import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        bio: "",
        postedPhotos: [],
        profilePhoto: "",
        username: ""
    },
    reducers:{
        setBio: (state, bio) => {
            state.bio = bio;
        },
        setPostedPhotos: (state, image) => {
            state.postedPhotos = [...state.postedPhotos, image];
        },
        setProfilePhoto: (state, image) => {
            state.profilePhoto =  image;
        },
        setUsername: (state, name) => {
            state.username = name;
        }
    }
});
export const { setBio, setPostedPhotos, setProfilePhoto, setUsername } = profileSlice.actions;
export default profileSlice.reducer;