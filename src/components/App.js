import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { capitalize } from '../utils/helpers';
import PostList from './PostList';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { withRouter, Route, Link } from 'react-router-dom';

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
          <Route exact path="/" component={PostList} />
          <Route exact path="/:category/:post_id" component={PostList} />
          <Route path="/:category" component={PostList} />
        </main>
        <footer>
          &copy; 2017.  All rights reserved.
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ category }) => {
  return {
    ...category
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
