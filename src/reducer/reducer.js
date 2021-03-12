import {Actions} from './actions';
import {ITEM_SHOW_COUNT} from '../constants/const';

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
  currentPage: 1,
  currentFilter: ``,
};

export const getNewPageNumber = (state, changeValue) => {
  const currentPage = state.currentPage;
  const newPageNumber = Math.round(currentPage + changeValue);
  const maxPageNumber = Math.round(state.data.length / ITEM_SHOW_COUNT);

  if (newPageNumber <= 0) {
    return 1;
  }

  if (newPageNumber > maxPageNumber) {
    return maxPageNumber;
  }

  return newPageNumber;
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REQUEST_DATA:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case Actions.REQUEST_DATA_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isLoading: false,
      });
    case Actions.REQUEST_DATA_ERROR:
      return Object.assign({}, state, {
        hasError: true,
      });
    case Actions.CHANGE_CURRENT_PAGE:
      return Object.assign({}, state, {
        currentFilter: ``,
        currentPage: getNewPageNumber(state, action.payload),
      });
    case Actions.CHANGE_CURRENT_FILTER:
      return Object.assign({}, state, {
        currentFilter: action.payload,
      });
    default:
      return state;
  }
};
