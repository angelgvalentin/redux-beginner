import { createSlice } from "@reduxjs/toolkit";

// ? createSlice allows us to create the reducer very easily and makes it intuitive to split the logic and be able to access it throughout the application.

const initialStateValue = "";

export const themeSlice = createSlice({
    name: " theme",
    initialState: { value: initialStateValue },
    reducers: {
        //every reducer takes in a function and these take in two parameters. One is the state and the second one is the action. the state holds the info about the current value of the state and ACTION is an object containing the payload and the type. The payload is an object where we can pass in infor to use to change the state. Type is
        changeColor: (state, action) => {
            state.value = action.payload; // what we are doing here is grabbing the (state) value and changing it to whatever we get from the payload
        },
    },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer; // we want to export specifically the reducer
