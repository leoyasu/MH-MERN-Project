import { createReducer } from "@reduxjs/toolkit";
import { signInUser } from "../actions/userActions";

const initialState = {
    user: undefined,
};

export const userReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(signInUser, (state, action) => {
            return { ...state, user: action.payload};
        });
});