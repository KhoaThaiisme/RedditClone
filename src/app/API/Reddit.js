const redditUrl = 'http://www.reddit.com';

export const getSubReddits = async () => {
    const url = redditUrl + 'subreddits.json';

    const response = await fetch(url);
    const json = response.json();
    const subRedditsList = json.data.children.map( subReddit => subReddit.data);

    return subRedditsList;
};

export const getSubredditPosts = async (subreddit) => {
    const url = redditUrl  + `${subreddit}.json`;

    const response = await fetch(url);
    const json = await response.json();
    const subRedditData = json.data.children.map(post => post.data);

    return subRedditData;
};

export const getPostComments = async(permalink) => {
    const url = redditUrl + `${permalink}.json`;

    const response = await fetch(url);
    const json = await response.json();
    const subRedditComments = json[1].data.children.map(comment => comment.data);
     
    return subRedditComments;
};