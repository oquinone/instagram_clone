import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        pData: {}
    },
    reducers:{
        setProfileData: (state, data) => {
            state.pData = data;
        }
    }
});
export const { setProfileData } = profileSlice.actions;
export default profileSlice.reducer;