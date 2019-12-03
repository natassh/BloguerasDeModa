import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ onChange }) => {
  const [state, setState] = useState({
    valueInput: ''
  });

  const handleChange = e => {
    const inputNewValue = e.target.value;
    setState({ valueInput: inputNewValue });

    onChange(inputNewValue);
  };

  return (
    <input
      className="BloggerSearchForm__Input"
      type="text"
      placeholder="Introduce el nombre de la bloguera"
      value={state.valueInput}
      onChange={handleChange}
    />
  );
};

export default Input;

Input.propTypes = {
  onChange: PropTypes.func
};
