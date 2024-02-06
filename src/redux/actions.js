import { ADD_CONTACT, FILTER_CONTACT, DELETE_CONTACT } from './constants';
import { nanoid } from 'nanoid';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};

export const filterContact = payload => {
  return {
    type: FILTER_CONTACT,
    payload,
  };
};
