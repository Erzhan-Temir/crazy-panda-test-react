import {ITEM_SHOW_COUNT, PAGE_INCREMENT_COUNT} from '../constants/const';

export const getLoadingState = (state) => state.isLoading;

export const getCurrentPage = (state) => state.currentPage;

export const getItems = (state) => {
  const start = (state.currentPage - PAGE_INCREMENT_COUNT) * ITEM_SHOW_COUNT;
  const end = state.currentPage * ITEM_SHOW_COUNT;
  return state.data.slice(start, end);
};
