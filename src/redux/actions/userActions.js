import { createAction } from "@reduxjs/toolkit";

export const signInUser = createAction('signIn_user', (user) => {
    return {
        payload: user
    }
})

export const signUpUser = createAction('signUp_user', (user) => {
    return {
        payload: user
    }
})