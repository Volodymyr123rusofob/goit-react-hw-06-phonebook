import { FILTER_CONTACT } from './constants';

const initialState = '';

export const filterReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case FILTER_CONTACT:
      console.log(payload);
      return (state = payload);
    default:
      return state;
  }
};
