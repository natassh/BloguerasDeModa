import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../../Atoms/Input';
import ButtonSearch from '../../Atoms/ButtonSearch';

import './BloggerSearchForm.css';

const BloggerSearchForm = ({ onGetBloggerSelected }) => {
  const [state, setState] = useState({
    valueInput: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    const { valueInput } = state;
    onGetBloggerSelected(valueInput);
  };

  const handleWhenValueInputChange = inputNewValue => {
    setState({ valueInput: inputNewValue });
  };

  return (
    <form className="BloggerSearchForm" onSubmit={handleSubmit}>
      <Input onChange={handleWhenValueInputChange} />
      <ButtonSearch type="submit" value="Buscar" />
    </form>
  );
};

export default BloggerSearchForm;

BloggerSearchForm.propTypes = {
  onGetBloggerSelected: PropTypes.func
};
