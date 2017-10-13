import React from 'react'
import ScoreVoting from './ScoreVoting';
import CommentList from './CommentList';

const PostDetail = (props) => {
  const { id, title, body, author, timestamp, voteScore, comments = [] } = props;

  return (
    <article itemScope itemType="http://schema.org/Article">
      <ScoreVoting score={voteScore} post_id={id} />
      <header>
        <h1 itemProp="name">{title}</h1>
        <small>
          <div>
            submitted on {new Date(timestamp).toDateString()} by {author}
          </div>
        </small>
      </header>
      <div className="content">
        {body}
        <CommentList postId={id} />
      </div>
    </article>
  )
}

export default PostDetail;
