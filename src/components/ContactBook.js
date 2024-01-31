import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import Contacts from './ContactList';
import { ContactBookWrapper, Subtitle, Title } from '../style/ContactBook.style';
import { Filter } from './Filter';
import { fetchContacts } from '../api/api';
import { Loader } from './Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectContacts, selectError, selectIsLoading } from '../processes/contactsSlice';

const ContactBook = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    toast.error('Something wrong');
  }

  return (
    <ContactBookWrapper>
      {isLoading && <Loader />}
      <Title>ContactBook</Title>
      <ContactForm />
      <Subtitle>Contacts ({contacts.length})</Subtitle>
      <Filter />
      {contacts.length ? <Contacts /> : <p>No contacts</p>}
    </ContactBookWrapper>
  );
};

export default ContactBook;
