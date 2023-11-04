import { createReducer } from "@reduxjs/toolkit";
import { loadDoctors, filterDoctors , setSearchValue } from "../actions/doctorAction";

const initialState = {
    doctors: [],
    filteredDoctors: [],
    searchValue: '',
};

export const doctorReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadDoctors, (state, action) => {
            return { ...state, doctors: action.payload, filteredDoctors: action.payload };
        })
        .addCase(filterDoctors, (state, action) => {
            if (action.payload === '') {
                return { ...state, filteredDoctors: state.doctors, searchValue: action.payload };
            } else {
                const filtered = state.doctors.filter((doctor) =>
                    doctor.specialty.toLowerCase().includes(action.payload.toLowerCase())
                );
                return { ...state, filteredDoctors: filtered, searchValue: action.payload };
            }
        })
        .addCase(setSearchValue, (state, action) => {
            return { ...state, searchValue: action.payload };
        });
});