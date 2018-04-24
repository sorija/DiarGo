import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ReadPostPage = (props) => (
  <div>
    <Header />
    <h1>{props.post.title}</h1>
    <p>{props.post.content}</p>
    <Link className="button" to={`/edit/${props.post.id}`}>Edit</Link>
  </div>
);

const mapStateToProps = (state, props) => ({
  post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(ReadPostPage);
