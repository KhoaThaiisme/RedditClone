import { createSlice } from "@reduxjs/toolkit";


const options = {
    name: 'post',
    initialState: '',
    reducers: {
        changeActivePostId: (state, action) => state = action.payload,
    } 
        
}

export const postSlice = createSlice(options);
export const {changeActivePostId} = postSlice.actions;
export const selectPost = state => state.post;
export default postSlice.reducer;