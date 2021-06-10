import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'loginAlert',
    initialState:{
        signUpSuccessfull: false,
        _info: "",
        username: ""
    },
    reducers:{
        setSignUpSuccess: (state, val) => {
            state.signUpSuccessfull = val;
        },
        setInfo: (state, id) => {
            state._info = id;
        },
        setUsername: (state, name) => {
            state.username = name;
        }
    }
});

export const { setSignUpSuccess, setInfo, setUsername } = loginSlice.actions;
export default loginSlice.reducer