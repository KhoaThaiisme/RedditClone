import React from 'react';
import { Link } from 'react-router-dom';
import { selectPost } from './postSlice';
import { useSelector } from 'react-redux';
import { selectSubReddit, subRedditSlice } from '../../subReddits/subRedditsSlice';
import { selectPosts } from '../postsSlice';
import { Video } from '../video/video';
import { Footer } from '../footer/footer';
import { selectTheme } from '../../../header/toggleTheme/toggleSlice';
import styles from './post.css';
import { PostsList } from '../postsList';

export const Post = (props) => {

    const postId = useSelector(selectPost);
    const selectedSubReddit = useSelector(subRedditSlice);
    const posts = useSelector(selectPosts);
    const theme =  useSelector(selectTheme);

    const selectPost = posts.filter(post =>  post.name === postId);

    function handleImgError({target}) {
        target.style.display = 'none';
    }

    return (
        <section className={styles.postsItem}>
            {selectedPost.map( post => (
                <div className={styles.singlePost} key={post.id}>
                    <Link to="/">
                        <button className={theme? styles.backButtonDark : styles.backButtonLight}>Back to {selectedSubReddit}</button>
                    </Link>
                    <h2>{post.title}</h2>
                    <p>{post.selftext}</p>
                    <img src={post.url} alt="" onError={handleImgError}/>
                    <div className={post.media ? styles.video : styles.noVideo}>
                        <Video postMedia={post.media} postUrl={post.url}/>
                    </div>
                    <div id={styles.link}>
                        <a href={post.url} target="_blank" id={styles.link} rel="noreferrer">{!post.media && post.url ? post.url : ""}</a>
                    </div>
                    <Footer
                        postId ={post.id}
                        postAuthor={post.author}
                        postCreated={post.created_utc}
                        postPermalink={post.permalink}
                        postComments={post.num_comments}
                        visible={true}
                    />
                </div>)
            )}
        </section>
    )
}
