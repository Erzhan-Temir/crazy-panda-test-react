import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActionsCreator} from '../../reducer/actions';
import {getCurrentPage} from '../../reducer/selectors';
import './pagination.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);

  const handlePageChange = (changeValue) => {
    dispatch(ActionsCreator.changeCurrentPage(changeValue));
  };

  return (
    <div className="main-board__pagination">
      <button
        onClick={() => handlePageChange(-9)}
        disabled={currentPage === 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => handlePageChange(-1)}
        disabled={currentPage === 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <span>{currentPage}</span>
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 10}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button
        onClick={() => handlePageChange(9)}
        disabled={currentPage === 10}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
