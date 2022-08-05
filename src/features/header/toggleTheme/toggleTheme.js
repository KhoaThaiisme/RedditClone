import React from 'react';
import styles from './toggleTheme.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, toggleTheme } from './toggleSlice';

export function ToggleTheme() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);

    const handleThemeChange = () => {
        dispatch(toggleTheme(theme));
    }

    return (
        <div id={styles.toggle} className={theme ? styles.darkTheme : styles.lightTheme}>
            <i className={theme ? 'fas fa-toggle-on' : 'fas fa-toggle-off'} onClick={handleThemeChange}></i>
            <p className={styles.theme}>{theme ? ' Dark Theme' : 'Light Theme'}</p>
        </div>
    );
}
