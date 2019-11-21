import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends React.Component {
  state = {
    valueInput: ''
  };
  handleChange = e => {
    const inputNewValue = e.target.value;
    this.setState({ valueInput: inputNewValue });

    const { onChange } = this.props;
    onChange(inputNewValue);
  };
  render() {
    return (
      <input
        className="BloggerSearchForm__Input"
        type="text"
        placeholder="Introduce el nombre de la bloguera"
        value={this.state.valueInput}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;

Input.propTypes = {
  inputChanged: PropTypes.func
};
