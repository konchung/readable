import React from 'react';
// import { redux } from 'react-redux';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: 'Test'};
    this.pageTitle = "Create new post"
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { title, body, author, category } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.pageTitle}</h1>
        <fieldset>
          <label>
            <div className="label">Title</div>
            <input type="text" value={title}  />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <div className="label">Body</div>
            <input type="text" value={body}  />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <div className="label">Author</div>
            <input type="text" value={author}  />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <div className="label">Category</div>
            <input type="text" value={category}  />
          </label>
        </fieldset>
        <fieldset>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    )
  }
}

export default PostForm;