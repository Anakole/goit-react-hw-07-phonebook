import { ContactsItem } from './ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

export const ContactsList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <ContactsItem name={name} number={number} id={id} />
        </Item>
      ))}
    </List>
  );
};
