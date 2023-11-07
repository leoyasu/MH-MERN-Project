import { createReducer } from "@reduxjs/toolkit";
import { signInUser,signUpUser} from "../actions/userActions";

const initialState = {
    userSignUp: undefined,
    userSignIn: undefined
};

export const userReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(signUpUser, (state, action) => {
            return { ...state, userSignUp: action.payload};
        }).addCase(signInUser, (state, action) => {
            return { ...state, userSignIn: action.payload};
        });
});