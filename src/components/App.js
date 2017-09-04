import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { capitalize } from '../utils/helpers';
import PostList from './PostList';
import { fetchCategories } from '../actions/category';
// import * as API from '../utils/api';

class App extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired
  }

  componentDidMount() {
    // API.getCategories().then(categories => console.log(categories));
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        <header>Readable</header>
        <nav>
          <div>
            <a href="/">Home</a>
          </div>
          {/* {categories.map((c, i) => (
            <div key={i}>
              <a href={c.path}>
                {capitalize(c.name)}
              </a>
            </div>
          ))} */}
        </nav>
        <main>
          <PostList />
        </main>
        <footer>
          &copy; 2017.  All rights reserved.
        </footer>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    categories: (data) => dispatch(fetchCategories()),
    // posts: (data) => dispatch()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
