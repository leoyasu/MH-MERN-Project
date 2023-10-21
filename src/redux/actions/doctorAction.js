import { createAction } from "@reduxjs/toolkit";

export const loadDoctors = createAction('load_doctors', (doctors) => {
    return {
        payload: doctors
    }
})

export const filterDoctors = createAction('filter_doctors', (value) => {
    return {
        payload: value
    }
})

export const setSearchValue = createAction('set_search_value', (value) => {
    return {
        payload: value
    }
});