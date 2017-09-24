import React from 'react';
import { PropTypes } from 'prop-types';
// import { Link } from 'react-router-dom';

class ScoreVoting extends React.Component {
    static propTypes = {
        score: PropTypes.number,
        post_id: PropTypes.string,
        comment_id: PropTypes.string
    }

    upVoteHandler() {
        console.log('up')
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

export default ScoreVoting;