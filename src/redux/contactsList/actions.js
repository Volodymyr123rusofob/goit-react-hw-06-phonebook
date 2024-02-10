import { nanoid } from 'nanoid';
import { CONTACTS, DELETE_CONTACT } from './constants';

export const addContact = ({ name, number }) => {
  return {
    type: CONTACTS,
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
