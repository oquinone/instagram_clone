import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        pData: {},
        updateUser: false,
        profilePicture: ""
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
        }
    }
});
export const { setProfileData, setUpdateUser, setProfilePicture } = profileSlice.actions;
export default profileSlice.reducer;