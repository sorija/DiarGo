import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addPost,
  startAddPost,
  setPosts,
  startSetPosts
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
