import React from 'react';
import { PropTypes } from 'prop-types';
import SortBar from './SortBar';
import PostListItem from './PostListItem';

class PostList extends React.Component {
  static propTypes = {
    post: PropTypes.array.isRequired
  }

  render() {
    const { post, match } = this.props;

    return (
      <div className="post-listing">
        <SortBar />
        {post.length === 0 ?
          <p>No post found</p>
          :
          post.map(p => (
            <PostListItem key={p.id} {...p} />
          ))}
      </div>
    )
  }
}

export default PostList;
