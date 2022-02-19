import React from "react";
import propTypes from "prop-types";

const ContactItem = ({ contactItem }) => (
  <p>
    {contactItem.name}: {contactItem.number}
  </p>
);

ContactItem.propTypes = {
  contactItem: propTypes.object,
  name: propTypes.string,
  number: propTypes.string,
};

export default ContactItem;
