import { CHANGE_FILTER } from './../constants';
import { Filter, FilterActionTypes } from './../types';
const initialState: Filter = 'all';

export const filterReducer = (
  state = initialState,
  { payload, type }: FilterActionTypes
): Filter => {
  switch (type) {
    case CHANGE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};
