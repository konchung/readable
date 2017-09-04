import React from 'react';
// import { redux } from 'react-redux';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        return (
            <div className="comment-list">
                <Comment />
            </div>
        )
    }
}

export default CommentList;