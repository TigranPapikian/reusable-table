import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    init: true,
    secret: ""
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSecret: (state, action) => {
            console.log("in reducer")
            state.secret = action.payload
        }
    }
});

export const { setSecret } = appSlice.actions;
export const getInit = ({app}) => app.init;
export const getSecret = ({app}) => app.secret;
export default appSlice.reducer;