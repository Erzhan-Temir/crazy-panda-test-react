import {getNewPageNumber} from './reducer';
import {ITEM_SHOW_COUNT} from '../constants/const';

describe(`Test for function that returns new page number`, () => {
  it(`Function returns correct page number if payload is positive`, () => {
    expect(getNewPageNumber({
      data: new Array(500),
      isLoading: false,
      hasError: false,
      currentPage: 1,
      currentFilter: ``,
    }, 1)).toEqual(2);
  });

  it(`Function returns correct page number if payload is negative`, () => {
    expect(getNewPageNumber({
      data: new Array(500),
      isLoading: false,
      hasError: false,
      currentPage: 3,
      currentFilter: ``,
    }, -1)).toEqual(2);
  });

  it(`Function returns correct page number if data list is not even`, () => {
    expect(getNewPageNumber({
      data: new Array(333),
      isLoading: false,
      hasError: false,
      currentPage: 1,
      currentFilter: ``,
    }, 1)).toEqual(2);
  });

  it(`Function returns correct page number if payload is not even (floor)`, () => {
    expect(getNewPageNumber({
      data: new Array(333),
      isLoading: false,
      hasError: false,
      currentPage: 1,
      currentFilter: ``,
    }, 1.25)).toEqual(2);
  });

  it(`Function returns correct page number if payload is not even (ceil)`, () => {
    expect(getNewPageNumber({
      data: new Array(333),
      isLoading: false,
      hasError: false,
      currentPage: 1,
      currentFilter: ``,
    }, 0.75)).toEqual(2);
  });

  it(`Function returns correct page number if payload is max value`, () => {
    const dataArrLength = 333;

    expect(getNewPageNumber({
      data: new Array(dataArrLength),
      isLoading: false,
      hasError: false,
      currentPage: 1,
      currentFilter: ``,
    }, 100)).toEqual(Math.round(dataArrLength / ITEM_SHOW_COUNT));
  });
});
