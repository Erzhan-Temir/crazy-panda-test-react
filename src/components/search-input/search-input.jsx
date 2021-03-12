import React from 'react';
import {ActionsCreator} from '../../reducer/actions';
import {getCurrentFilter} from '../../reducer/selectors';
import {useDispatch, useSelector} from 'react-redux';
import './search-input.css';

const SearchInput = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCurrentFilter);

  const handleInputChange = (evt) => {
    dispatch(ActionsCreator.changeCurrentFilter(evt.target.value));
  };

  return (
    <input
      value={value}
      onChange={(evt) => handleInputChange(evt)}
      type="text"
      placeholder="Введите текст"
      className="main-board__search"
    />
  );
};

export default SearchInput;
