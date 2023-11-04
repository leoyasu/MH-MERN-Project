import { configureStore } from '@reduxjs/toolkit'
import { doctorReducer } from './reducers/doctorReducer';
import { userReducer } from './reducers/userReducer'


export const store = configureStore({
    reducer: {
        storeDoctors: doctorReducer,
        storeUser: userReducer
    }
})