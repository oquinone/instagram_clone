import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'loginAlert',
    initialState:{
        signUpSuccessfull: false
    },
    reducers:{
        setSignUpSuccess: (state, val) => {
            state.signUpSuccessfull = val;
        }
    }
});

export const { setSignUpSuccess } = loginSlice.actions;
export default loginSlice.reducer