import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        bio: "",
        postedPhotos: [],
        profilePhoto: "",
    },
    reducers:{
        setBio: (state, bio) => {
            state.bio = bio;
        },
        setPostedPhotos: (state, images) => {
            state.postedPhotos = images;
        },
        setProfilePhoto: (state, image) => {
            state.profilePhoto =  image;
        },
    }
});
export const { setBio, setPostedPhotos, setProfilePhoto } = profileSlice.actions;
export default profileSlice.reducer;