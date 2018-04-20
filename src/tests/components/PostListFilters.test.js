import React from 'react';
import { shallow } from 'enzyme';
import { PostListFilters } from '../../components/PostListFilters';
import filters from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, setDateFilter, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setDateFilter = jest.fn();
  wrapper = shallow(
    <PostListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      setDateFilter={setDateFilter}
    />
  );
});

test('should render PostListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'foo';
  wrapper.find('input').simulate('change', {
    // ensure e.target.value exists
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle date change', () => {
  const date = moment(0).add(14, 'days');
  wrapper.find('[onDateChange]').prop('onDateChange')(date);
  expect(setDateFilter).toHaveBeenLastCalledWith(date);
});
