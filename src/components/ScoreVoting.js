import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class ScoreVoting extends React.Component {
  static propTypes = {
    score: PropTypes.number,
    post_id: PropTypes.string,
    comment_id: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.is
  }
  upVoteHandler() {
    console.log('up')
    // this.props.actions.
  }

  downVoteHandler() {
    console.log('down')
  }

  render() {
    const { score } = this.props;

    return (
      <div className="score-bar">
        <button onClick={this.upVoteHandler}>Upvote</button>
        <div className="score">{score}</div>
        <button onClick={this.downVoteHandler}>Downvote</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions.default, dispatch)
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ScoreVoting));