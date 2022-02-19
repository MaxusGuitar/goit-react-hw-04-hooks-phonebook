import React from "react";
import style from "./find.module.css";
import propTypes from "prop-types";

const FindContact = ({ filter, change }) => (
  <label htmlFor="" className={style.font}>
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
  filter: propTypes.string,
  change: propTypes.func,
};

export default FindContact;
