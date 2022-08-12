import { configureStore } from "@reduxjs/toolkit";
import toggleThemeSlice from "../features/header/toggleTheme/toggleSlice";
import searchBarSlice from "../features/header/searchBar/searchBarSlice";
import subRedditsSlice from "../features/main/subReddits/subRedditsSlice";
import postsSlice from "../features/main/posts/postsSlice";
import postSlice from "../features/main/posts/post/postSlice";

export default configureStore({ 
    reducer: {
        toggle: toggleThemeSlice,
        search: searchBarSlice,
        subReddits: subRedditsSlice,
        posts: postsSlice,
        post: postSlice
    }
})