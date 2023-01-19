import { useSelector } from 'react-redux';
import { ContactsItem } from './ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactsList = () => {
  const getVisibleContacts = useSelector(selectVisibleContacts);

  console.log(getVisibleContacts);

  return (
    <List>
      {getVisibleContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <ContactsItem name={name} number={number} id={id} />
        </Item>
      ))}
    </List>
  );
};
