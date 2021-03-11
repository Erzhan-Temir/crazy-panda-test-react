import {ITEM_SHOW_COUNT, PAGE_INCREMENT_COUNT} from '../constants/const';

export const getLoadingState = (state) => state.isLoading;

export const getCurrentPage = (state) => state.currentPage;

export const getCurrentFilter = (state) => state.currentFilter;

const getSlicedItems = (state) => {
  const start = (state.currentPage - PAGE_INCREMENT_COUNT) * ITEM_SHOW_COUNT;
  const end = state.currentPage * ITEM_SHOW_COUNT;
  return state.data.slice(start, end);
};

const getFilteredItems = (arr, filterValue) => {
  return arr.filter((item) => item.name.indexOf(filterValue) > -1);
};

export const getItems = (state) => {
  return getFilteredItems(getSlicedItems(state), state.currentFilter);
};
