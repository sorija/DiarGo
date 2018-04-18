import React from 'react';
import { connect } from 'react-redux';

export const ReadPostPage = (props) => (
  <div>
    <h1>Post Page</h1>
    <h3>{props.post.title}</h3>
    <p>{props.post.content}</p>
  </div>
);

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(ReadPostPage);
