import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactInfo,
  ContactItem,
  ContactList,
  DeleteContactBtn,
  FilterErrorMessage,
} from '../style/ContactList.style';
import { selectFilters } from '../processes/filterslice';
import { selectContacts } from '../processes/contactsSlice';
import { deleteContact } from '../api/api';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactList>
      {filteredContacts.length !== 0 ? (
        filteredContacts.map(item => (
          <ContactItem key={item.id}>
            <ContactInfo>
              <span>
                {item.name}: {item.number}
              </span>
            </ContactInfo>
            <DeleteContactBtn type="button" onClick={() => dispatch(deleteContact(item.id))}>
              Delete
            </DeleteContactBtn>
          </ContactItem>
        ))
      ) : (
        <FilterErrorMessage>Could not find contacts with this name!</FilterErrorMessage>
      )}
    </ContactList>
  );
};

export default Contacts;
