import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addPost,
  startAddPost,
  setPosts,
  startSetPosts,
  removePost,
  startRemovePost,
  editPost,
  startEditPost
} from '../../actions/posts';
import posts from '../fixtures/posts';
import database from '../../firebase/firebase';

const uid = 'testuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const postsData = {};
  posts.forEach(({ id, title, content }) => {
    postsData[id] = { title, content };
  });
  database.ref(`users/${uid}/posts`).set(postsData).then(() => done());
});

test('should setup add post action object with provided values', () => {
  const action = addPost(posts[0]);
  expect(action).toEqual({
    type: 'ADD_POST',
    post: posts[0]
  });
});

test('should add post to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const postData = {
    title: 'Relevant topic',
    content: 'Detailed post'
  };
  store.dispatch(startAddPost(postData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_POST',
      post: {
        id: expect.any(String),
        ...postData
      }
    });
    return database.ref(`users/${uid}/posts/${actions[0].post.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(postData);
    done();
  });
});

test('should add post with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const postDefaults = {
    title: '',
    content: ''
  };
  store.dispatch(startAddPost({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_POST',
      post: {
        id: expect.any(String),
        ...postDefaults
      }
    });
    return database.ref(`users/${uid}/posts/${actions[0].post.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(postDefaults);
    done();
  });
});

test('should setup set post action object with data', () => {
  const action = setPosts(posts);
  expect(action).toEqual({
    type: 'SET_POSTS',
    posts
  });
});

test('should fetch the posts from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetPosts()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_POSTS',
      posts
    });
    done();
  });
});

test('should setup remove post action object', () => {
  const action = removePost({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_POST',
    id: '123abc'
  });
});

test('should remove post from firebase', (done) => {
  const id = posts[1].id;
  const store = createMockStore(defaultAuthState);
  store.dispatch(startRemovePost({ id })).then((snapshot) => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_POST',
      id
    });
    return database.ref(`users/${uid}/posts/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should setup edit post action object', () => {
  const action = editPost('123abc', { title: 'Edited Title' });
  expect(action).toEqual({
    type: 'EDIT_POST',
    id: '123abc',
    updates: {
      title: 'Edited Title'
    }
  });
});

test('should edit expenses in firebase', (done) => {
  const id = posts[1].id;
  const updates = { content: 'Edited post content'};
  const store = createMockStore(defaultAuthState);
  store.dispatch(startEditPost(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_POST',
      id,
      updates
    });
    return database.ref(`users/${uid}/posts/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().content).toBe(updates.content);
    done();
  });
});
