const filtersReducerDefaults = {
  text: '',
  date: undefined
};

const filtersReducer = (state = filtersReducerDefaults, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_DATE_FILTER':
    return {
      ...state,
      date: action.date
    };
    default:
      return state
  };
};

export default filtersReducer;
