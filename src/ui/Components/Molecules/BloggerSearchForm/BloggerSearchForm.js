import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../Atoms/Input';
import ButtonSearch from '../../Atoms/ButtonSearch';

import './BloggerSearchForm.css';

class BloggerSearchForm extends React.Component {
  state = {
    valueInput: ''
  };

  handleWhenValueInputChange = inputNewValue => {
    this.setState({ valueInput: inputNewValue });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { valueInput } = this.state;
    const { onGetBloggerSelected } = this.props;
    onGetBloggerSelected(valueInput);
  };

  render() {
    return (
      <form className="BloggerSearchForm" onSubmit={this.handleSubmit}>
        <Input onChange={this.handleWhenValueInputChange} />
        <ButtonSearch type="submit" value="Buscar" />
      </form>
    );
  }
}
export default BloggerSearchForm;

BloggerSearchForm.propTypes = {
  onGetBloggerSelected: PropTypes.func
};
