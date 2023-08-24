import {createSlice} from "@reduxjs/toolkit";

const initialState = {

    _id:'',
    email: '',
    username: '',
    auth: false
}

export const userslice = createSlice ({

    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action) => {

            const {_id, username, email, auth } = action.payload;

            state._id = _id;
            state.username = username;
            state.email = email;
            state.auth = auth;
        },
        resetUser: (state) => {

            state._id = '';
            state.username = '';
            state.email = '';
            state.auth = false;
        },
    },

});

export const {setUser,resetUser} = userslice.actions;

export default userslice.reducer;