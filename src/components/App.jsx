import { Component } from 'react';
import { Container } from '../ui/Container';
import { SectionWrapper } from '../ui/SectionWrapper';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { showAlertMessage } from 'ui/AlertMessage/AlertMessage';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;
    if (prevContacts !== nextContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckContact = name => {
    const { contacts } = this.state;
    const isExistContact = contacts.find(contact => contact.name === name);
    isExistContact && showAlertMessage(name);
    return isExistContact;
  };

  handleDeleteContact = contactId =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <SectionWrapper title="Phonebook">
          <ContactForm
            onAdd={this.handleAddContact}
            onCheckContact={this.handleCheckContact}
          />
        </SectionWrapper>
        <SectionWrapper title="Contact List">
          <Filter value={filter} onChange={this.handleChangeFilter} />
          {contacts.length > 0 && (
            <ContactList
              contacts={visibleContacts}
              onDelete={this.handleDeleteContact}
            />
          )}
        </SectionWrapper>
      </Container>
    );
  }
}
