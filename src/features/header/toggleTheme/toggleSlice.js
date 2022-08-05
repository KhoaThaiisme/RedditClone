import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'toggle',
    initialState: false,
    reducers: {
        toggleTheme: (state, action) => state = !state,
    }
}

export const toggleThemeSlice = createSlice(options);
export const selectTheme = state => state.toggle;
export const { toggleTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;