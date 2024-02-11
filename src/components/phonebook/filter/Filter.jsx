import style from './filter.module.css';
import ListContacts from '../listContacts/ListContacts';
import { useSelector } from 'react-redux';
import { selectListContacts } from '../../../redux/contactsList/selectors';
import { useDispatch } from 'react-redux';
import { selectFilterContact } from '../../../redux/contactsFilters/selectors';
import { filterContact } from '../../../redux/contactsFilters/filterSlice';

const FilterContact = () => {
  const contacts = useSelector(selectListContacts);
  const filter = useSelector(selectFilterContact);
  const dispatch = useDispatch();
  const getFilteredContact = () => {
    if (!filter) return contacts;
    const normalizedFilter = filter.toLowerCase();
    const filteredContact = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
    return filteredContact;
  };

  const changeFilter = ({ target }) => {
    dispatch(filterContact(target.value));
  };

  const items = getFilteredContact();
  return (
    <>
      <input
        className={style.inp}
        onChange={changeFilter}
        name="filter"
        placeholder="Search"
      />
      <ListContacts items={items} />
    </>
  );
};

export default FilterContact;
