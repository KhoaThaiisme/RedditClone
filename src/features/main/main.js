import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './main.css';
import { SubReddits } from './subReddits/subReddits';
import { Post } from './posts/post/post';
import { PostList } from './posts/postList';
import { useSelector } from 'react-redux';
import { selectTheme } from '../header/toggleTheme/toggleSlice';

export function Main() {
    const theme = useSelector(selectTheme);

    return(
        <main className={theme ? styles.darkTheme : styles.lighTheme}>
            <SubReddits/>
            <section id={styles.posts}>
                <Switch >
                    <Route exact path='/'>
                        <PostList/>
                    </Route>
                    <Route exact path='/Post'>
                        <Post/>
                    </Route>
                </Switch>
            </section>
        </main>
    );
}