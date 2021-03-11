import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ActionsCreator} from '../reducer/actions';
import {connect} from 'react-redux';

const withErrorBoundary = (BaseComponent) => {
  class WithErrorBoundary extends Component {

    componentDidCatch() {
      this.props.throwError();
    }

    render() {
      if (this.props.hasError) {
        return <p>Sorry, but something went wrong...</p>;
      }

      return <BaseComponent {...this.props} />;
    }
  }

  WithErrorBoundary.propTypes = {
    hasError: PropTypes.bool.isRequired,
    throwError: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      hasError: state.hasError,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      throwError: () => dispatch(ActionsCreator.requestDataError)
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithErrorBoundary);
};

export default withErrorBoundary;
