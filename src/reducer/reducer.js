import API from '../services/api';

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
};

export const Actions = {
  REQUEST_DATA: `REQUEST_DATA`,
  REQUEST_DATA_SUCCESS: `REQUEST_DATA_SUCCESS`,
  REQUEST_DATA_ERROR: `REQUEST_DATA_ERROR`,
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
    default:
      return state;
  }
};
