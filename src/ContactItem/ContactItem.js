import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ contactItem }) => (
  <p>
    {contactItem.name}: {contactItem.number}
  </p>
);

ContactItem.propTypes = {
  contactItem: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};

export default ContactItem;
