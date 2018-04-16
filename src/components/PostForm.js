import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title : '',
      content: props.post ? props.post.content : '',
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
        content: this.state.content
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange} 
          />
        <textarea
          placeholder="Content"
          value={this.state.content}
          onChange={this.onContentChange}
        >
        </textarea>
        <div>
          <button>Save Post</button>
        </div>
      </form>
    );
  }
};
