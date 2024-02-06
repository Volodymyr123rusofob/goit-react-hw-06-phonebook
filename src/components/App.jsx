import { addContact, deleteContact, filterContact } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../redux/selectors';

import ContactForm from './phonebook/form/ContactForm';
import ListContacts from './phonebook/listContacts/ListContacts';
import FilterContact from './phonebook/filter/Filter';

import style from './app.module.css';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  // !==================
  // const [contact, setContacts] = useState(() => {
  //   const contact = JSON.parse(localStorage.getItem('contact'));
  //   return contact || [];
  // });

  const isDublicate = ({ name }) => {
    const normalizedName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normalizedName;
    });
    return Boolean(dublicate);
  };

  const onAddContact = data => {
    if (isDublicate(data)) {
      return alert(`Contact ${data.name} already in list`);
    }
    const action = addContact(data);
    dispatch(action);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => {
    dispatch(filterContact(target.value));
  };

  return (
    <div className={style.box}>
      <div className={style.boxdiv}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onAddContact} />
        <div className={style.div}>
          <h2 className={style.h2}>Contacts</h2>
          <FilterContact changeFilter={changeFilter} />
          <ListContacts items={contacts} deleteContact={onDeleteContact} />
        </div>
      </div>
    </div>
  );
};

export default App;
