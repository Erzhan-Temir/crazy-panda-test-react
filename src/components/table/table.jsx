import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getLoadingState, getItems} from '../../reducer/selectors';
import {Operations} from '../../reducer/reducer';
import './table.css';

const Table = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadingState);
  const tableItems = useSelector(getItems);
  const [idSorting, setIdSorting] = useState(`inc`);
  const [nameSorting, setNameSorting] = useState(`inc`);
  const sortedItems = tableItems.slice();

  sortedItems.sort((a, b) => {
    if (idSorting === `inc`) {
      return a.id - b.id;
    }
    return b.id - a.id;
  });

  sortedItems.sort((a, b) => {
    if (nameSorting === `inc`) {
      return sortedItems;
    }
    return b.name.length - a.name.length;
  });

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
            <th
              onClick={() => {
                return idSorting === `inc` ? setIdSorting(`dec`) : setIdSorting(`inc`);
              }}
            >ID</th>
            <th
              onClick={() => {
                return nameSorting === `inc` ? setNameSorting(`dec`) : setNameSorting(`inc`);
              }}
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

export default Table;
