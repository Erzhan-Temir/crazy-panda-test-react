import React, {useEffect} from 'react';
import {getLoadingState} from '../reducer/selectors';
import {Operations} from '../reducer/actions';
import LoadingStub from '../components/loading-stub/loading-stub';
import {useSelector, useDispatch} from 'react-redux';

const withLoadings = (Component) => {
  const WithLoading = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getLoadingState);

    useEffect(() => {
      dispatch(Operations.requestData);
    }, []);

    if (isLoading) {
      return <LoadingStub />;
    }

    return <Component {...props} />;
  };

  return WithLoading;
};

export default withLoadings;
