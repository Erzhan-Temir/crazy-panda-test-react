import React from 'react';
import Pagination from '../pagination/pagination';
import SearchInput from '../search-input/search-input';
import Table from '../table/table';
import withErrorBoundary from '../../hocs/with-error-boundary';
import './app.css';

function App() {
  return (
    <section className="main-board">
      <h1 className="visually-hidden">Comment table</h1>
      <div className="main-board__wrapper">
        <SearchInput />
        <Pagination />
        <Table />
      </div>
    </section>
  );
}

export default withErrorBoundary(App);
