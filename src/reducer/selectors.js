import {ITEM_SHOW_COUNT} from '../constants/const';

export const getLoadingState = (state) => state.isLoading;

export const getItems = (state) => state.data.slice(0, ITEM_SHOW_COUNT);
