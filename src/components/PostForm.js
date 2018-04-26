import React from 'react';
import moment from 'moment';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title : '',
      content: props.post ? props.post.content : '',
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      error: '',
    };
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onContentChange = (e) => {
    const content = e.target.value;
    this.setState(() => ({ content }));
  };
  onSubmit = (e) => {
    e.preventDefault(); // prevent full-page reload
    if (!this.state.title || !this.state.content) {
      this.setState(() => ({ error: 'Please provide title and content'}));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onPostSubmit({
        title: this.state.title,
        content: this.state.content,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input title-input"
          type="text"
          placeholder="Title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange} 
          />
        <textarea
          className="text-input content-input"
          placeholder="Content"
          value={this.state.content}
          onChange={this.onContentChange}
        >
        </textarea>
        <div>
          <button className="button">Save</button>
        </div>
      </form>
    );
  }
};
