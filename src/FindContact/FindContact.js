import React from "react";
import style from "./find.module.css";
import PropTypes from "prop-types";

const FindContact = ({ filter, change }) => (
  <label className={style.font}>
    {" "}
    Find contact:
    <input
      className={style.find__font}
      type="text"
      value={filter}
      onChange={change}
    />
  </label>
);

FindContact.propTypes = {
  filter: PropTypes.string,
  change: PropTypes.func,
};

export default FindContact;
