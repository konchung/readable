import React from 'react';
import { Link } from 'react-router-dom';
import ScoreVoting from './ScoreVoting';
import CommentList from './CommentList';

const PostListItem = (props) => {
  const { id, title, author, timestamp, voteScore, category, comments = [] } = props;

  return (
    <article>
      <ScoreVoting score={voteScore} post_id={id} />
      <header>
        <Link to={`/${category}/${id}`}>
          <h1>{title}</h1>
        </Link>
        <small>
          <div>
            submitted on {new Date(timestamp).toDateString()} by {author}
          </div>
        </small>
      </header>
    </article>
  )
}

export default PostListItem;
