import React from 'react';
import styles from '';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSubReddits } from '../../../app/API/Reddit';
import {
    selectSubReddit,
    selectSubReddits,
    addSubReddit,
    changeSelectedSubReddit
} from './subRedditSlice';

export function SubReddit() {
    const dispatch = useDispatch();
    const subReddits = useSelector(selectSubReddits);
    const selectedSubReddit = useSelector(selectSubReddit);
    useEffect(() => {
        getSubReddits().then(jsonResponse => {
            jsonResponse.forEach(dataItem => dispatch(
                addSubReddit(
                    {
                        name: dataItem.display_name,
                        url: dataItem.url,
                        id: dataItem.id,
                        icon: dataItem.community_icon.split("?")[0],
                    }
                )
            ))
        })
    }, [dispatch]);

    const handleChange = (e) => {
        dispatch(changeSelectedSubReddit(e.target.value))
    };

    return ( 
        <section id={styles.subReddits}>
            <h1>Sub Reddits</h1>
            <select 
                className={styles.selectForm} 
                onChange={handleChange}
                value={selectedSubReddit}
            >
                {subReddits.map( subReddit => (
                    <option 
                        className={styles.selectOption}
                        value={subReddit.url} 
                        key={subReddit.id}
                    >
                        {subReddit.url}
                    </option>
                ))}
            </select>
        </section>
    );
};