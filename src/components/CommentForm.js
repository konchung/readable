import React from 'react';
import { redux } from 'react-redux';

class CommentForm extends React.Component {
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
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label>
            <div className="label">Title</div>
            <input type="text" value={title}  />
          </label>
        </fieldset>
        <fieldset>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    )
  }
}

export default CommentForm;