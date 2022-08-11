import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'posts',
    initialState: [],
    reducers: {
        addPosts: (state, action) => action.payload;
    }
}

export const postsSlice = createSlice(options);
// actions
export const {addPosts} = postsSlice.actions;
// selectors
export const selectPosts = state => state.posts;
// reducers
export default postsSlice.reducer;