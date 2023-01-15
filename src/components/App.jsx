import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';
import { Wrap } from './App.styled';

export function App() {
  return (
    <Wrap>
      <Section title={`Phonebook`}></Section>
      <ContactForm />
      <Section title={`Contacts`}>
        <Filter />
        <ContactList />
      </Section>
    </Wrap>
  );
}

export default App;
