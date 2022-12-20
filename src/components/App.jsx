import { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { showAlertMessage } from 'ui/AlertMessage/AlertMessage';
import { defaultContacts } from 'data/contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    return JSON.parse(savedContacts) ?? defaultContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact =>
    setContacts(prevState => [...prevState, newContact]);

  const handleDeleteContact = contactId =>
    setContacts(contacts.filter(contact => contact.id !== contactId));

  const handleCheckContact = name => {
    const isExistContact = contacts.find(contact => contact.name === name);
    isExistContact && showAlertMessage(name);
    return isExistContact;
  };

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <SectionWrapper title="Phonebook">
        <ContactForm
          onAdd={handleAddContact}
          onCheckContact={handleCheckContact}
        />
      </SectionWrapper>
      <SectionWrapper title="Contact List">
        <Filter value={filter} onChange={handleChangeFilter} />
        {contacts.length > 0 && (
          <ContactList
            contacts={getVisibleContacts()}
            onDelete={handleDeleteContact}
          />
        )}
      </SectionWrapper>
    </Container>
  );
};
