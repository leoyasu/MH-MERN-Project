import { configureStore } from '@reduxjs/toolkit'
import { doctorReducer } from './reducers/doctorReducer';


export const store = configureStore({
    reducer: {
        storeDoctors: doctorReducer,
    }
})