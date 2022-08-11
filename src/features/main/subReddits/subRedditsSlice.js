import { createSlice } from '@reduxjs/toolkit';

const options = { 
    name: 'subReddits',
    initialState: {
        subReddit: [],
        selectedSubReddit: '/r/Home',
    },
    reducers: {
        addSubReddit: (state, action) => {
            state.subReddits.push(action.payload);
        },
        changeSelectedSubReddit: (state, action) => {
            state.selectedSubReddit = action.payload;
        },
    },
};

export const subRedditSlice = createSlice(options);

export const { addSubReddit, changeSelectedSubReddit } = subRedditsSlice.actions;

export const selectSubReddits = state => state.subReddits.subReddits;
export const selectSubReddit = state => state.subReddits.selectedSubReddit;

export default subRedditsSlice.reducer;

