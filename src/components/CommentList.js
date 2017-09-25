import React from 'react'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Comment from './Comment';

class CommentList extends React.Component {
    static propTypes = {
        postId: PropTypes.string.isRequired
    }

    render() {
        const { comment, postId } = this.props
        const postComments = comment.filter(c => c.parentId === postId)

        return (
            <div className="comment-list">
                {postComments.map((d, i) => (
                    <Comment key={i} comment={d} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ commentReducer }) => {
    return {
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
    )(CommentList));