import { useState } from "react";
import style from "./form.module.css";
import PropTypes from "prop-types";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onInputChange = (e) => {
    const ctg = e.currentTarget.name;
    if (ctg === "name") {
      setName(e.currentTarget.value);
    }
    if (ctg === "number") {
      setNumber(e.currentTarget.value);
    }
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  return (
    <form className={style.form} onSubmit={onSubmitForm}>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={onInputChange}
          required
        />
      </label>
      <label>
        Number:{" "}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={onInputChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
