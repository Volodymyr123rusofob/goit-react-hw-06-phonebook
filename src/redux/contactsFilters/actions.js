import { FILTER_CONTACT } from './constants';

export const filterContact = value => {
  return {
    type: FILTER_CONTACT,
    payload: value,
  };
};
