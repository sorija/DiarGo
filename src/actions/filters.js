export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setDateFilter = (date) => ({
  type: 'SET_DATE_FILTER',
  date
});
