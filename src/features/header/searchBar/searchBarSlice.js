import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'search',
    initialState: '',
    reducers: {
        newSearchTerm: (state, action) => state = action.payload,
    },
}

export const searchSlice = createSlice(options);
export const selectSearchTerm = state =>  state.search;
export const { newSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;