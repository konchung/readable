import React from 'react';
import Post from './Post';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class PostListSingle extends React.Component {
    static propTypes = {
        post: PropTypes.array.isRequired
    }

    componentWillMount() {
        const { actions, match } = this.props;

        actions.fetchPost(match.params.post_id);
        actions.clearComment();
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

const mapStateToProps = ({ postReducer }) => {
    return {
        ...postReducer
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
    )(PostListSingle));
