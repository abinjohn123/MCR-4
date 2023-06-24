import { useState } from 'react';
import { useAppContext } from '../../../AppContext';

import {
  CommentIcon,
  ShareIcon,
  BookmarkIcon,
  ChevronUp,
  ChevronDown,
} from '../../Assets/SVGIcons';

const Userdetails = ({ details }) => {
  const { username, picUrl, createdAt } = details;
  return (
    <div className="post-header">
      <img className="profile-icon" src={picUrl} alt={username} />
      <p>
        Posted by <span className="username">@{username}</span>
      </p>
    </div>
  );
};

const PostVotes = ({ postId, upvotes, downvotes }) => {
  const { setData } = useAppContext();
  const [voted, setVoted] = useState(null);

  const voteHandler = (voteType) => {
    if (voteType === 'upvote') {
      if (voted === 'upvote') return;

      setData((data) => ({
        ...data,
        posts: data.posts.map((post) =>
          post.postId === postId ? { ...post, upvotes: post.upvotes + 1 } : post
        ),
      }));

      setVoted('upvote');
    } else {
      if (voted === 'downvote') return;

      setData((data) => ({
        ...data,
        posts: data.posts.map((post) =>
          post.postId === postId
            ? { ...post, downvotes: post.downvotes + 1 }
            : post
        ),
      }));

      setVoted('downvote');
    }
  };

  return (
    <div className="post-votes">
      <div
        className={`vote-btn ${voted === 'upvote' ? 'voted' : ''}`}
        onClick={() => voteHandler('upvote')}
      >
        <ChevronUp />
      </div>
      <p>{upvotes - downvotes}</p>
      <div
        className={`vote-btn ${voted === 'downvote' ? 'voted' : ''}`}
        onClick={() => voteHandler('downvote')}
      >
        <ChevronDown />
      </div>
    </div>
  );
};

const Pill = ({ pill }) => <div className="pill">{pill}</div>;

const Post = ({ item }) => {
  const { setData } = useAppContext();
  const {
    postId,
    post,
    postDescription,
    tags,
    isBookmarked,
    upvotes,
    downvotes,
  } = item;

  const handleBookmarkClick = () =>
    setData((data) => ({
      ...data,
      posts: data.posts.map((post) =>
        post.postId === postId
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post
      ),
    }));

  return (
    <div className="post">
      <PostVotes postId={postId} upvotes={upvotes} downvotes={downvotes} />
      <div className="post-content">
        <Userdetails details={item} />
        <div className="post-details">
          <h3 className="post-title">{post}</h3>
          <div className="post-pills">
            {tags.map((tag, index) => (
              <Pill pill={tag} key={index} />
            ))}
          </div>
          <p className="post-desc">{postDescription}</p>
        </div>
        <div className="post-actions">
          <CommentIcon />
          <ShareIcon />
          <div onClick={handleBookmarkClick}>
            <BookmarkIcon className={isBookmarked ? `filled` : ''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Userfeed = () => {
  const { data, setData } = useAppContext();
  return (
    <div className="container">
      <div className="user-feed">
        <h3>Latest posts</h3>
        {data.posts?.map((item) => (
          <Post key={item.postId} item={item} />
        ))}
      </div>
    </div>
  );
};
