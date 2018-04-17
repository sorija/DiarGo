import React from 'react';
import { shallow } from 'enzyme';
import { EditPostPage } from '../../components/EditPostPage';
import posts from '../fixtures/posts';

let startEditPost, startRemovePost, history, wrapper;

beforeEach(() => {
  startEditPost = jest.fn();
  startRemovePost = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditPostPage
      startEditPost={startEditPost}
      startRemovePost={startRemovePost}
      history={history}
      post={posts[1]}
    />
  );
});

test('should render EditPostPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditPost', () => {
  wrapper.find('PostForm').prop('onPostSubmit')(posts[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditPost).toHaveBeenLastCalledWith(posts[1].id, posts[1]);
});

test('should handle startRemovePost', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemovePost).toHaveBeenLastCalledWith({
    id: posts[1].id
  });
});
