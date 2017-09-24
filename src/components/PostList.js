import React from 'react';
import Post from './Post';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class PostList extends React.Component {
    static propTypes = {
        post: PropTypes.array.isRequired
    }

    componentWillMount() {
        const { actions, match } = this.props;

        switch (match.path) {
            case '/:category':
                actions.fetchCategoryPosts(match.params.category);
                break;
            case '/:category/:post_id':
                actions.fetchPost(match.params.post_id);
                break;
            default:
                actions.fetchPosts();
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
    }

    render() {
        const { post, match } = this.props;

        let withComments = false;
        if (match.params.post_id) {
            withComments = true
        }

        return (
            <div className="post-listing">
                {post.map((p, i) => (
                    <Post key={i} post={p} withComments={withComments} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ post }) => {
    return {
        ...post
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
    )(PostList));
