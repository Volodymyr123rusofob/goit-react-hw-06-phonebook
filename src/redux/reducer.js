import { ADD_CONTACT, FILTER_CONTACT, DELETE_CONTACT } from './constants';

const initialState = {
  contacts: [],
  filters: '',
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const { contacts } = state;
      return {
        ...state,
        contacts: [...contacts, payload],
      };
    case DELETE_CONTACT:
      const newContacts = state.contacts.filter(
        contact => contact.id !== payload
      );
      return {
        ...state,
        contacts: newContacts,
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filters: payload,
      };
    default:
      return state;
  }
};
