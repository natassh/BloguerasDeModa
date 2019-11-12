import React from 'react';
import './Input.css';

class Input extends React.Component {
  state = {
    valueInput: ''
  };
  handleChange = e => {
    const inputNewValue = e.target.value;
    this.setState({ valueInput: inputNewValue });

    const { inputChanged } = this.props;
    inputChanged(inputNewValue);
  };
  render() {
    //console.log(this.state.valueInput);
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
