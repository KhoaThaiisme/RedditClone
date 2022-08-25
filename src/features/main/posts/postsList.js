import React from 'react';
import { Link } from 'react-router-dom';
import styles from './postsList.css';
import { getSubredditPosts } from '../../../app/API/Reddit';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectSearchTerm } from '../../header/searchBar/searchBarSlice';
import { selectPosts } from '../posts/postsSlice';
import { selectSubReddit } from '../subReddits/subRedditsSlice';
import { addPosts } from './postsSlice';
import { Footer } from './footer/footer';
import { Video } from './video/video';
import { changeActivePostId } from './post/postSlice';

export function PostsList() {
    const posts = useSelector(selectPosts);
    const activeSubReddit = useSelector(selectSubReddit);
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    useEffect( () => {
        getSubredditPosts(activeSubReddit)
        .then( jsonData => {
            dispatch(addPosts(jsonData))
        });
    }, [activeSubReddit, dispatch]);

    const filteredPosts = posts.filter( post => post.title.toLowerCase().includes(searchTerm.toLowercase()));

    function handleImgError({target}) {
        target.style.display = 'none';
    };

    // console.log(filteredPosts)
    return (
        <div id={styles.postsItem}>
            {filteredPosts.map( post => (
                <div className={styles.singlePost} key={post.id}>
                    <Link to="/Post" onClick={() => dispatch(changeActivePostId(post.name))}>
                        <h2>{post.title}</h2>
                        <p>{post.selftext}</p>
                        <img src={post.url} alt="" onError={handleImgError}/>
                        <div className={post.media ? styles.video : styles.noVideo}>
                            <Video postMedia={post.media} postUrl={post.url}/>
                        </div>
                        <p>{!post.media && post.url ? post.url : ""}</p>
                    </Link>
                    <Footer
                        postId ={post.id}
                        postAuthor={post.author}
                        postCreated={post.created_utc}
                        postPermalink={post.permalink}
                        postComments={post.num_comments}
                        visible={false}
                    />
                </div>)
            )}
        </div>

    )
}