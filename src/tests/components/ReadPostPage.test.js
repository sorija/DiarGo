import React from 'react';
import { shallow } from 'enzyme';
import { ReadPostPage } from '../../components/ReadPostPage';
import posts from '../fixtures/posts';

test('should render ReadPostPage with a post', () => {
  const wrapper = shallow(<ReadPostPage post={posts[0]}/>);
  expect(wrapper).toMatchSnapshot();
});
