import React, { Component } from "react";
import style from "./form.module.css";
import propTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.onSubmitForm}>
        <label htmlFor={this.name}>
          Name:{" "}
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.onInputChange}
            required
          />
        </label>
        <label htmlFor={this.number}>
          Number:{" "}
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.onInputChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: propTypes.func,
};

export default ContactForm;
