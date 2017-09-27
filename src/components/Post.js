import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import ScoreVoting from './ScoreVoting';
import CommentList from './CommentList';
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
        const { actions, post, match } = this.props

        actions.fetchComments(post.id)
    }

    render() {
        const { post, withComments, comment } = this.props;
        const numComment = comment.filter(c => c.parentId === post.id).length

        let body;
        let commandBar;

        if (withComments) {
            body = (
                <div className="content">
                    {post.body}
                    <CommentList postId={post.id} />
                </div>
            );
        }

        return (
            <article itemScope itemType="http://schema.org/Article">
                <ScoreVoting score={post.voteScore} post_id={post.id} />
                <header>
                    <h1 itemProp="name"><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></h1>
                    <small>
                        <div>
                            submitted on {new Date(post.timestamp).toDateString()} by {post.author} with <Link to={`/${post.category}/${post.id}`}>{numComment} comments</Link>
                        </div>
                    </small>
                </header>
                {body}
            </article>
        )
    }
}

Post.defaultProps = {
    withComments: false
};

const mapStateToProps = ({ postReducer, commentReducer }) => {
    return {
        // ...postReducer,
        ...commentReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions.default, dispatch)
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Post));