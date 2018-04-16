import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startAddPost } from '../actions/posts';

export class AddPostPage extends React.Component {
  onPostSubmit = (post) => {
    this.props.startAddPost(post);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add New Post</h1>
          </div>
        </div>
        <div className="content-container">
          <PostForm 
            onPostSubmit={this.onPostSubmit}
          />
        </div>
      </div>
    );
  };
};

const mapDispatchtoProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchtoProps)(AddPostPage);
