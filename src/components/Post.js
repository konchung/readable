import React from 'react';
// import { redux } from 'react-redux';
import CommentList from './CommentList';

class Post extends React.Component {
    render() {
        return (
            <article itemScope itemType="http://schema.org/Article">
                <header><h1 itemProp="name">Header</h1></header>
                <div className="">
                    Content
                </div>
                <CommentList />
            </article>
        )
    }
}

export default Post;