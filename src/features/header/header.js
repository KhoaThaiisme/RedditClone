import React from 'react';
import styles from 'header.css';
import { Link } from 'react-router-dom';
import redditLogo from '';
import { SearchBar } from './searchBar/searchBar';
import { ToggleTheme } from './toggleTheme/toggleTheme';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedSubReddit } from ''
import { selectTheme } from './toggleTheme/toggleSlice';

export function Header() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    const handleClick = () => {
        dispatch(changeSelectedSubReddit('/r/Home/'))
    }

    return (
        <header className={theme ? styles.darkTheme : styles.lightTheme}>
            <Link to='/'>
                <div onClick={handleClick} id={styles.logo}></div>
            </Link>
            <SearchBar/>
            <ToggleTheme/>
        </header>
    )
}