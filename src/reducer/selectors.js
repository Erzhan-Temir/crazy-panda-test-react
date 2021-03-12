import {ITEM_SHOW_COUNT, PAGE_CHANGE_BY_STEP} from '../constants/const';

const getSlicedItems = (state) => {
  const start = (state.currentPage - PAGE_CHANGE_BY_STEP) * ITEM_SHOW_COUNT;
  const end = state.currentPage * ITEM_SHOW_COUNT;
  return state.data.slice(start, end);
};

const getFilteredItems = (arr, filterValue) => {
  return arr.filter((item) => item.name.indexOf(filterValue) > -1);
};

export const getLoadingState = (state) => state.isLoading;

export const getCurrentPage = (state) => state.currentPage;

export const getCurrentFilter = (state) => state.currentFilter;

export const getMaxPageNumber = (state) => state.data.length / ITEM_SHOW_COUNT;

export const getItems = (state) => {
  return getFilteredItems(getSlicedItems(state), state.currentFilter);
};
