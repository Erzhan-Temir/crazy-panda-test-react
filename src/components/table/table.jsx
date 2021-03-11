import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getLoadingState, getItems} from '../../reducer/selectors';
import {Operations} from '../../reducer/reducer';
import './table.css';

const Table = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingState);
  const tableItems = useSelector(getItems);

  useEffect(() => {
    dispatch(Operations.requestData);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main-board__table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            tableItems.map(({id, name}) => {
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

export default Table;
