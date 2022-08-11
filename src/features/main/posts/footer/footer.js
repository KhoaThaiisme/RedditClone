import React from 'react';
import styles from './footer.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {dateCalculator};
import { Comments } from '../comments/comments';
import { selectTheme } from '../../../header/toggleTheme/toggleSlice';


export const Footer = (props) => {
    const [active, setActive] = useState(false);
    const theme = useSelector(selectTheme);

    const onCommentsClicked = () => {
        const postComments = document.getElementById(props.postId);
        if (active ) {
            postComments.style.display = 'none';
            setActive(false);
        } else {
            postComments.style.display = 'block';
            setActive(true);
        }
    }

    return(
        <footer className={theme ? styles.darkTheme : styles.lightTheme}>
            <ul className={styles.postInfos}>
                <li>Posted by: <span>{props.postAuthor}</span></li>
                <li>{dateCalculator(props.postCreated)}</li>
                <li onClick={onCommentsClicked} className={styles.commentsIcon}><i className="far fa-comments"></i><span>{props.postComments}</span></li>
            </ul>
            <Comments permalink={props.postPermalink}
                id={props.postId}
                visible={props.visible}
            />
        </footer>
    )
}