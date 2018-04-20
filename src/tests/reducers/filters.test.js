import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    date: undefined
  });
});

test('should set text filter', () => {
  const text = 'Spanish Inquisition';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set date filter', () => {
  const date = moment(0).add(7, 'days').valueOf();
  const action = {
    type: 'SET_DATE_FILTER',
    date
  };
  const state = filtersReducer(undefined, action);
  expect(state.date).toBe(date);
});
