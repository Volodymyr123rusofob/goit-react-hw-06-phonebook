import { CONTACTS, DELETE_CONTACT } from './constants';
const initialState = [];

export const contactReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case CONTACTS:
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};
