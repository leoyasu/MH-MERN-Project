import { createAction } from "@reduxjs/toolkit";

export const signInUser = createAction('signIn_user', (user) => {
    return {
        payload: user
    }
})