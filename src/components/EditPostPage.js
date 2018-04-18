import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

export class EditPostPage extends React.Component {
  onSubmit = (post) => {
    this.props.startEditPost(this.props.post.id, post)
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemovePost({ id: this.props.post.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Link to={`/read/${this.props.post.id}`}>Readable version</Link>
        <PostForm
          post={this.props.post}
          onPostSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove Post</button>
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
