import React from 'react';
import { useState, useEffect } from 'react';
import styles from './comments.css';
import { useSelector } from 'react-redux'; 
import { selectTheme } from '../../../header/toggleTheme/toggleSlice';
import { getPostComments } from '../../../../app/API/Reddit';

export const Comments = (props) => {
    const [comments, setComments ] = useState([]);
    const theme = useSelector(selectTheme);

    useEffect(() => {
        getPostComments(props.permalink)
            .then(jsonComments => setComments(
                jsonComments.map(comment => {
                    <div key={comment.id} id={styles.comment}>
                        <div className={styles.commentHeader}>
                            <p className={theme ? styles.commentAuthorDark : styles.commentAuthorLight}>{comment.author}</p>
                            <p className={styles.commentDate}>{dateCalculator(comment.created_utc)}</p>
                        </div>
                        <p>{comment.body}</p>
                    </div>
                })
            ))
    }, [props.permalink, theme]);
     
    return( 
        <div id={props.id} className={props.visible === true ? styles.isShown : styles.isNotShown}>
            <div className={theme ? styles.darkTheme : styles.lightTheme}>
                {comments}
            </div>
        </div>
    )
}