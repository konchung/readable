import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ScoreVoting from './ScoreVoting';

class Comment extends React.Component {
    static proptypes = {
        comment: PropTypes.object.isRequired
    }

    render() {
        const { comment } = this.props;

        return (
            <div className="comment-wrapper">
                <ScoreVoting score={comment.voteScore} comment_id={comment.id} />
                <div className="comment">
                    <div className="comment-body">
                        {comment.body}
                    </div>
                    <small>By {comment.author} on {new Date(comment.timestamp).toDateString()}</small>
                </div>
            </div>
        )
    }
}

export default Comment;