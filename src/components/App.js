import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { capitalize } from '../utils/helpers';
import PostListSingle from './PostListSingle';
import PostList from './PostList';
import CategoryPostList from './CategoryPostList';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { withRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  static propTypes = {
    category: PropTypes.array.isRequired
  }

  componentWillMount() {
    this.props.actions.fetchCategories();
  }

  render() {
    const { category } = this.props;

    return (
      <div>
        <header>Readable</header>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          {category.map((c, i) => (
            <div key={i}>
              <Link to={`/${c.path}`}>
                {capitalize(c.name)}
              </Link>
            </div>
          ))}
        </nav>
        <main>
          <Switch>
            <Route exact path="/" render={()=>(
              <PostList />
            )} />
            <Route exact path="/:category/:post_id" render={()=>(
              <PostListSingle />
            )} />
            <Route path="/:category" render={()=>(
              <CategoryPostList />
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

const mapStateToProps = ({ categoryReducer }) => {
  return {
    ...categoryReducer
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
