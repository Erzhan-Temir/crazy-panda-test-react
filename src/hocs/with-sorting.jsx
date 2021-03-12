import React, {useState} from 'react';
import {getItems} from '../reducer/selectors';
import {idSortingValues, nameSortingValues} from '../constants/const';
import {useSelector} from 'react-redux';

const withSorting = (Component) => {
  const WithSorting = (props) => {

    const tableItems = useSelector(getItems);
    const [idSortingValue, setIdSorting] = useState(idSortingValues.toUp);
    const [nameSorting, setNameSorting] = useState(nameSortingValues.default);

    const sortedItems = tableItems.slice();


    sortedItems.sort(() => {
      return idSortingValue;
    });

    sortedItems.sort((a, b) => {
      if (nameSorting === nameSortingValues.default) {
        return sortedItems;
      }
      return b.name.length - a.name.length;
    });


    const toggleIdSorting = () => {
      return idSortingValue === idSortingValues.toUp ? setIdSorting(idSortingValues.toDown) : setIdSorting(idSortingValues.toUp);
    };

    const toggleNameSorting = () => {
      return nameSorting === nameSortingValues.default ? setNameSorting(nameSortingValues.toDown) : setNameSorting(nameSortingValues.default);
    };


    return <Component {...props} sortedItems={sortedItems} toggleIdSorting={toggleIdSorting} toggleNameSorting={toggleNameSorting} />;
  };

  return WithSorting;
};

export default withSorting;
