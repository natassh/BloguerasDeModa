import React from 'react';
import PropTypes from 'prop-types';

import './ButtonSearch.css';

function ButtonSearch({ type, value }) {
  return (
    <input
      type={type}
      value={value}
      className="blogger-search-form__button-search"
    />
  );
}

export default ButtonSearch;

ButtonSearch.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
};
