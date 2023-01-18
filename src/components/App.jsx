import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';
import { Wrap } from './App.styled';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Wrap>
      <Section title={`Phonebook`}></Section>
      <ContactForm />
      {contacts.length !== 0 ? (
        <Section title={`Contacts`}>
          <Filter />
          <ContactList />
        </Section>
      ) : (
        <Section title={`Add new contacts`}></Section>
      )}
    </Wrap>
  );
}

export default App;
