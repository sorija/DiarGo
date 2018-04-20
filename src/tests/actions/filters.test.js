import { setTextFilter, setDateFilter } from '../../actions/filters';
import moment from 'moment';

test('should generate set text filter object with text value', () => {
  const text = 'Testing intensify';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter object with defaults', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate set date filter object with date value', () => {
  const date = moment(0).subtract(3, 'days').valueOf();
  const action = setDateFilter(date);
  expect(action).toEqual({
    type: 'SET_DATE_FILTER',
    date
  });
});
