import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import intialContacts from './Contacts.json';
import Section from './Section';
import Filter from './Filter';
import { Wrap } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? intialContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact({ name, number }) {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([newContact, ...contacts]);
    return true;
  }

  const filterContact = e => {
    setFilter(e.currentTarget.value);
  };

  const onFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContacts = onFilteredContacts();

  const onDeleteContact = id => {
    return setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Wrap>
      <Section title={`Phonebook`}></Section>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length !== 0 ? (
        <>
          <Filter filter={filter} filterContact={filterContact} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={onDeleteContact}
          />
        </>
      ) : (
        <h2>Add new contact</h2>
      )}
    </Wrap>
  );
}

export default App;
