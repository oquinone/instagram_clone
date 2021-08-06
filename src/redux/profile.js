import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        pData: {},
        updateUser: false,
        profilePicture: "",
        selectedImage: -1
    },
    reducers:{
        setProfileData: (state, data) => {
            state.pData = data;
        },
        setUpdateUser: (state, data) => {
            state.updateUser = data;
        },
        setProfilePicture: (state, image) => {
            state.profilePicture = image;
        },
        setSelectedImage: (state, val) => {
            state.selectedImage = val;
        }
    }
});
export const { setProfileData, setUpdateUser, setProfilePicture, setSelectedImage } = profileSlice.actions;
export default profileSlice.reducer;