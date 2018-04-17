import React from 'react';
import { shallow } from 'enzyme';
import PostListItem from '../../components/PostListItem';
import posts from '../fixtures/posts';

test('should render PostListItem with a post', () => {
  const wrapper = shallow(<PostListItem {...posts[0]}/>);
  expect(wrapper).toMatchSnapshot();
});
