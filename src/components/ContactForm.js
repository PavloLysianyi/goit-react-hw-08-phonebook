import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormButton, Input, InputLabel } from '../style/ContactForm.style';
import { useForm } from 'react-hook-form';
import { findContact } from 'helper/findContact';
import { selectContacts } from '../processes/contactsSlice';
import { addContact } from '../api/api';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const submit = data => {
    if (findContact(data.name, contacts)) return;
    dispatch(addContact(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <InputLabel>
        Name
        <Input {...register('name')} type="text" required placeholder="Enter contact name" />
      </InputLabel>
      <InputLabel>
        Number
        <Input {...register('number')} type="tel" required placeholder="Enter phone number" />
      </InputLabel>
      <FormButton>Add contact</FormButton>
    </Form>
  );
};

export default ContactForm;
