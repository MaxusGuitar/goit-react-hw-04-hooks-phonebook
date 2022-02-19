import React from "react";
import ContactItem from "../ContactItem";
import propTypes from "prop-types";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem contactItem={{ name, number, id }}></ContactItem>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: propTypes.array,
  onDeleteContact: propTypes.func,
  id: propTypes.string,
};

export default ContactList;
