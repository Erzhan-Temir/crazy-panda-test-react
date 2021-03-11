import React from 'react';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import withLoading from '../../hocs/with-loading';
import withSorting from '../../hocs/with-sorting';
import './table.css';

const Table = (props) => {
  const {sortedItems, toggleIdSorting, toggleNameSorting} = props;

  return (
    <div className="main-board__table">
      <table>
        <thead>
          <tr>
            <th
              onClick={() => toggleIdSorting()}
            >ID</th>
            <th
              onClick={() => toggleNameSorting()}
            >Name</th>
          </tr>
        </thead>
        <tbody>
          {
            sortedItems.map(({id, name}) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  sortedItems: PropTypes.array.isRequired,
  toggleIdSorting: PropTypes.func.isRequired,
  toggleNameSorting: PropTypes.func.isRequired,
};

export default compose(withLoading, withSorting)(Table);
