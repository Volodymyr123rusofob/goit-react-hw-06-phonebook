export const getAllContacts = store => store.contacts;
export const getFilter = store => store.filters;
export const getFilteredContacts = store => {
  const { contacts, filters } = store;
  if (!filters) return contacts;
  const normalizedFilter = filters.toLowerCase();
  const filteredContact = contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
  return filteredContact;
};
