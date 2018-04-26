import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

export class EditPostPage extends React.Component {
  onSubmit = (post) => {
    this.props.startEditPost(this.props.post.id, post)
    this.props.history.push(`/read/${this.props.post.id}`);
  };
  onRemove = () => {
    this.props.startRemovePost({ id: this.props.post.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Your Post</h1>
          </div>
        </div>
        <div className="content-container">
          <PostForm
            post={this.props.post}
            onPostSubmit={this.onSubmit}
          />
          <button className="button--rem" onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  // search state for matching post
  post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startRemovePost: (data) => dispatch(startRemovePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
