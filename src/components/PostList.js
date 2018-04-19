import React from 'react';
import { connect } from 'react-redux';
import PostListItem from './PostListItem';
import selectPosts from '../selectors/posts';

export const PostList = (props) => (
  <div>
    <h1>Posts</h1>
    {
      props.posts.length === 0 ? (
        <h3>There are no posts</h3>
      ): (
        props.posts.map((post) => {
          return <PostListItem key={post.id}{...post} />
        })
      )
    }
  </div>
);

const mapStateToProps = (state) => ({
  posts: selectPosts(state.posts, state.filters)
});

export default connect(mapStateToProps)(PostList);
