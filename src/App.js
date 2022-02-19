import React, { Component } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import FindContact from "./FindContact";
import shortid from "shortid";
import style from "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  deleteContact = (contactid) => {
    this.setState((prewState) => ({
      contacts: prewState.contacts.filter((c) => c.id !== contactid),
    }));
  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.find(
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
    this.setState(() => ({
      contacts: [c, ...this.state.contacts],
    }));
  };

  contactFind = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((c) =>
      c.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidUpdate(prewProps, prewState) {
    // Для обновления данных
    if (this.state.contacts !== prewState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    // Для хранения в локалке
    const contacts = localStorage.getItem("contacts");
    const ParseContacts = JSON.parse(contacts);

    if (ParseContacts) {
      this.setState({ contacts: ParseContacts });
    }
  }

  render() {
    const contactsFind = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <FindContact filter={this.state.filter} change={this.contactFind} />
        <ContactList
          contacts={contactsFind}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
