import React from 'react';
// import { redux } from 'react-redux';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment-wrapper">
                <div className="score">1222</div>
                <div className="comment">
                    <h4>Comment Title</h4>
                    <div>By Konway Chung on Jun 8, 2017</div>
                    <div className="comment-body">
                        Comment
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;