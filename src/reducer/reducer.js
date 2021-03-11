import API from '../services/api';
import {ITEM_SHOW_COUNT} from '../constants/const';

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
  currentPage: 1,
};

export const Actions = {
  REQUEST_DATA: `REQUEST_DATA`,
  REQUEST_DATA_SUCCESS: `REQUEST_DATA_SUCCESS`,
  REQUEST_DATA_ERROR: `REQUEST_DATA_ERROR`,
  CHANGE_CURRENT_PAGE: `CHANGE_CURRENT_PAGE`,
};

export const ActionsCreator = {
  requestData: () => {
    return {
      type: Actions.REQUEST_DATA,
    };
  },
  requestDataSuccess: (loadedData) => {
    return {
      type: Actions.REQUEST_DATA_SUCCESS,
      payload: loadedData,
    };
  },
  requestDataError: () => {
    return {
      type: Actions.REQUEST_DATA_ERROR,
    };
  },
  changeCurrentPage: (changeValue) => {
    return {
      type: Actions.CHANGE_CURRENT_PAGE,
      payload: changeValue,
    };
  }
};

export const Operations = {
  requestData: (dispatch) => {
    dispatch(ActionsCreator.requestData());
    API.getComments()
      .then((data) => dispatch(ActionsCreator.requestDataSuccess(data)))
      .catch(dispatch(ActionsCreator.requestDataError()));
  },
};

const getNewPageNumber = (currentPage, totalLength, changeValue) => { // ref
  if (currentPage + changeValue <= 0) {
    return 1;
  }

  if (currentPage + changeValue > totalLength / ITEM_SHOW_COUNT) { // ref if max is float
    return totalLength / ITEM_SHOW_COUNT;
  }

  return currentPage + changeValue;
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
        currentPage: getNewPageNumber(state.currentPage, state.data.length, action.payload),
      });
    default:
      return state;
  }
};
