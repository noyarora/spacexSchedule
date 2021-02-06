import React from 'react';
import PropTypes from "prop-types";
import classes from './Button.module.css';

const Button = ({ btnName, btnGroup, selectedFilter, changeFilter }) => (
  <button
    className={`${classes.FilterButton} ${
      selectedFilter === btnName ? classes.Active : ''
    }`}
    id={`btn${btnName}-${btnGroup}`}
    aria-label={`${btnName} filter`}
    onClick={() => changeFilter(btnName)}
  >
    {btnName}
  </button>
);

Button.propTypes = {
  btnName: PropTypes.string,
  selectedFilter: PropTypes.string,
  btnGroup: PropTypes.string
};

export default Button;
