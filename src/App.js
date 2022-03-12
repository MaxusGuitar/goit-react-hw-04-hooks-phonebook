import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import FindContact from "./FindContact";
import { useLocaleStorage } from "./hocks/useLocaleStorage";
import shortid from "shortid";
import style from "./App.css";

export default function App() {
  const [contacts, setContacts] = useLocaleStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const deleteContact = (contactid) => {
    setContacts((contacts) => contacts.filter((c) => c.id !== contactid));
  };

  const addContact = ({ name, number }) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const c = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts((a) => [c, ...a]);
  };

  const contactFind = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <FindContact filter={filter} change={contactFind} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
