import { configureStore } from "@reduxjs/toolkit";

export default configureStore({ 
    reducer: {
        toggle: toggleThemeSlice,
        search: searchBarSlice,
        subReddits: subRedditsSlice,
        posts: postsSlice,
        post: postslice
    }
})