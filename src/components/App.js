import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

import Navigation from './Navigation';
import PostDetail from './PostDetail';
import PostList from './PostList';
import PostForm from './PostForm';

class App extends Component {
  static propTypes = {
    category: PropTypes.array.isRequired
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchCategories();
    actions.fetchPosts();
    actions.fetchComments();
  }

  filterPostByCategory(posts, category) {
    return posts.filter(post => post.category === category);
  }

  filterPostById(posts, id) {
    return posts.filter(post => post.id === id)[0];
  }

  render() {
    const { category, post } = this.props;

    return (
      <div>
        <header>Readable</header>
        <Navigation categories={category} />
        <main>
          <Switch>
            <Route exact
              path="/"
              render={() => (
                <PostList post={post} />
              )} />
            <Route exact
              path="/posts/new"
              component={PostForm} />
            <Route
              path="/:category/:id/edit"
              render={({ match }) => (
                <PostForm initialValues={this.filterPostById(post, match.params.id)} />
              )} />
            <Route exact
              path="/:category/:id"
              render={({ match }) => (
                <PostDetail {...this.filterPostById(post, match.params.id) } />
              )} />
            <Route
              path="/:category"
              render={({ match }) => (
                <PostList post={this.filterPostByCategory(post, match.params.category)} />
              )} />
          </Switch>
        </main>
        <footer>
          &copy; 2017.  All rights reserved.
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ categoryReducer, postReducer }) => {
  return {
    ...categoryReducer,
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
  )(App));
