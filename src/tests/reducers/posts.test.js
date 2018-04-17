import postsReducer from '../../reducers/posts';
import posts from '../fixtures/posts';

test('should set default state', () => {
  //'@@INIT' is an action dispatched by Redux
  const state = postsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should set posts', () => {
  const action = {
    type: 'SET_POSTS',
    posts: [posts[0]]
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual([posts[0]]);
});

test('should add a post', () => {
  const post = {
    id: '3',
    title: 'Great discovery',
    content: 'Very interesting note'
  }
  const action = {
    type: 'ADD_POST',
    post
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual([...posts, post]);
});

test('should remove post by id', () => {
  const action = {
    type: 'REMOVE_POST',
    id: posts[0].id
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual([posts[1]]);
});

test('should not remove post if id was not found', () => {
  const action = {
    type: 'REMOVE_POST',
    id: '-1'
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual(posts);
});

test('should edit the post', () => {
  const content = 'I was edited';
  const action = {
    type: 'EDIT_POST',
    id: posts[1].id,
    updates: {
      content
    }
  };
  const state = postsReducer(posts, action);
  expect(state[1].content).toBe(content);
});

test('should not edit post if it was not found', () => {
  const title = 'Very Interesting Post';
  const action = {
    type: 'EDIT_POST',
    id: '-1',
    updates: {
      title
    }
  };
  const state = postsReducer(posts, action);
  expect(state).toEqual(posts);
});
