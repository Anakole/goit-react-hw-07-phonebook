import { deleteContact } from 'redux/operations';
import { Button } from '../ContactList.styled';
import { ContactName, ContactTel } from './ContactItem.styled';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactName>{name}</ContactName>
      <ContactTel href="tel:{number}">{number}</ContactTel>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </>
  );
};
