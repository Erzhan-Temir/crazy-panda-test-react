import API from '../services/api';

export const Actions = {
  REQUEST_DATA: `REQUEST_DATA`,
  REQUEST_DATA_SUCCESS: `REQUEST_DATA_SUCCESS`,
  REQUEST_DATA_ERROR: `REQUEST_DATA_ERROR`,
  CHANGE_CURRENT_PAGE: `CHANGE_CURRENT_PAGE`,
  CHANGE_CURRENT_FILTER: `CHANGE_CURRENT_FILTER`,
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
  },
  changeCurrentFilter: (filterValue) => {
    return {
      type: Actions.CHANGE_CURRENT_FILTER,
      payload: filterValue
    };
  },
};

export const Operations = {
  requestData: (dispatch) => {
    dispatch(ActionsCreator.requestData());
    API.getComments()
      .then((data) => dispatch(ActionsCreator.requestDataSuccess(data)))
      .catch(() => dispatch(ActionsCreator.requestDataError()));
  },
};
