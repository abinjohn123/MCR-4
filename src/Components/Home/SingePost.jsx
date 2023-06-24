import { useParams, useNavigate } from 'react-router';

import { useAppContext } from '../../../AppContext';
import { Post } from './Userfeed';
import {
  BackArrow,
  CommentIcon,
  ShareIcon,
  HeartIcon,
} from '../../Assets/SVGIcons';
import './home.scss';

const Userdetails = ({ details }) => {
  const { username, name, createdAt } = details;
  const formattedDate = new Intl.DateTimeFormat('en-Us', {
    hour: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(createdAt));
  return (
    <div className="post-header">
      <p>
        {name} <span className="username">@{username}</span>
      </p>
      ·<span className="post-date">{formattedDate}</span>
    </div>
  );
};

const SingleComment = ({ comment: commentItem }) => {
  const { picUrl, likes, comment } = commentItem;
  return (
    <div className="comment-card">
      <img className="user-icon" src={picUrl} alt={comment} />
      <div className="comment-details">
        <Userdetails details={commentItem} />
        <p className="comment-content">{comment}</p>
        <div className="post-actions">
          <HeartIcon />
          <CommentIcon />
          <ShareIcon />
        </div>
      </div>
    </div>
  );
};

const PostComments = ({ comments }) => {
  return (
    <div className="comments-container">
      {comments.length === 0 ? (
        <p className="no-coms">
          No comments. Be the first person to share something here!
        </p>
      ) : (
        comments.map((comment) => (
          <SingleComment comment={comment} key={comment.commentId} />
        ))
      )}
    </div>
  );
};

const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data } = useAppContext();

  const singlePost = data.posts.find((post) => post.postId === postId);

  return (
    <div className="container">
      <div className="user-feed">
        <div className="back-action" onClick={() => navigate('/')}>
          <BackArrow />
          <h3>Post</h3>
        </div>

        <Post item={singlePost} />
        <PostComments comments={singlePost.comments} />
      </div>
    </div>
  );
};

export default SinglePost;
