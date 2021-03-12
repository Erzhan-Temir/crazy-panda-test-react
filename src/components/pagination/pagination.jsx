import React from 'react';
import {ActionsCreator} from '../../reducer/actions';
import {getCurrentPage, getMaxPageNumber} from '../../reducer/selectors';
import {PAGE_CHANGE_BY_STEP} from '../../constants/const';
import {useDispatch, useSelector} from 'react-redux';
import './pagination.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);
  const maxPageNumber = useSelector(getMaxPageNumber);

  const handlePageChange = (changeValue) => {
    dispatch(ActionsCreator.changeCurrentPage(changeValue));
  };

  return (
    <div className="main-board__pagination">

      <button
        onClick={() => handlePageChange(-maxPageNumber)}
        disabled={currentPage === 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => handlePageChange(-PAGE_CHANGE_BY_STEP)}
        disabled={currentPage === 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <span className="main-board__page-number">{currentPage}</span>

      <button
        onClick={() => handlePageChange(PAGE_CHANGE_BY_STEP)}
        disabled={currentPage === maxPageNumber}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button
        onClick={() => handlePageChange(maxPageNumber)}
        disabled={currentPage === maxPageNumber}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
