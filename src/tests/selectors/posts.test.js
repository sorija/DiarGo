import selectPosts from '../../selectors/posts';
import posts from '../fixtures/posts';
import moment from 'moment';

test('should filter by text value', () => {
  const filters = {
    text: 'h',
    date: undefined
  };
  const result = selectPosts(posts, filters);
  expect(result).toEqual([posts[1]]);
});

test('should filter by date', () => {
  const filters = {
    text: '',
    date: moment(0).add(6, 'days')
  };
  const result = selectPosts(posts, filters);
  expect(result).toEqual([posts[1]]);
});

