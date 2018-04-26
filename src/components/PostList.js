import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostListItem from './PostListItem';
import selectPosts from '../selectors/posts';

export const PostList = (props) => (
  <div className="content-container">
    <h1 className="list-header">Posts<Link className="button button--new" to="/create">New post</Link></h1>
    <div className="list-body">
      {
        props.posts.length === 0 ? (
          <h3 className="list-item--message">There are no posts</h3>
        ): (
          props.posts.map((post) => {
            return <PostListItem key={post.id}{...post} />
          })
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  posts: selectPosts(state.posts, state.filters)
});

export default connect(mapStateToProps)(PostList);
