import React from 'react';
import styles from './video.css';


export const Video = (props) => {
    const { postMedia, postUrl } = props;

    const videoSource = () => {
        if (postMedia && postMedia.reddit_video !== undefined) {
            return (
                <video width='100%' controls>
                    <source src={postMedia.reddit_video.fallback_url}></source>
                    Your browser doesn't support the video tag.
                </video>
            );
        }
        return (
            <a href={postUrl} target='_blank' rel='noreferrer'>{postUrl}</a>
        )
    }

    return (
        <div className={styles.video}>{videoSource()}</div>
    )
}