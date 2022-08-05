import React from 'react';
import styles from './searchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { newSearchTerm, selectSearchTerm } from ;

export function SearchBar () {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const handleTextChange = (e) => {
        dispatch(newSearchTerm(e.target.value))
    };

    return (
        <div id={styles.searchBar}>
            <input
                placeholder='Search for posts...'
                type='text'
                value={searchTerm}
                onChange={handleTextChange}>

            </input>
            <i  id={searchTerm.length === 0 ? styles.search : styles.circle}
                className={ searchTerm.length === 0 ? 'fas fa search' : 'far fa-times-cicle'}
                onClick={() => dispatch(newSearchTerm())}
        </div>
    )
}