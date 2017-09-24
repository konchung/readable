import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import ScoreVoting from './ScoreVoting';
import Comment from './Comment';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class Post extends React.Component {
    static propTypes = {
        post: PropTypes.object.isRequired,
        withComments: PropTypes.bool.isRequired
    }

    componentWillMount() {
        //this.props.actions.fetchComments(this.props.post.id);
    }

    render() {
        const { post } = this.props;

        let body;
        let commentList;
        let commandBar;
        console.log(post)
        if (this.props.withComments) {
            body = (
                <div className="content">
                    {post.body}
                </div>
            );
            commentList = (
                <div className="comment-list">
                    {/* {post.comment.map((d, i) => (
                        <Comment key={i} comment={d} />
                    ))} */}
                </div>
            );
        } else {
            commandBar = (
                <div>
                    {/* <Link to={`/${post.category}/${post.id}`}>{post.comment.length} comments</Link> */}
                </div>
            );
        }

        return (
            <article itemScope itemType="http://schema.org/Article">
                <ScoreVoting score={post.voteScore} post_id={post.id} />
                <header>
                    <h1 itemProp="name"><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></h1>
                    <small>
                        <div>submitted on {new Date(post.timestamp).toDateString()} by {post.author}</div>
                        {commandBar}
                    </small>
                </header>
                {body}
                {commentList}
            </article>
        )
    }
}

Post.defaultProps = {
    withComments: false
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions.default, dispatch)
    }
}

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(Post));