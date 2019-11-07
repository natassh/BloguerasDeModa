import React from 'react';

import Input from '../../Atoms/Input';
import ButtonSearch from '../../Atoms/ButtonSearch';

import './BloggerSearchForm.css';

function BloggerSearchForm() {
  return (
    <form className="blogger-search-form">
      <Input />
      <ButtonSearch type="submit" value="Buscar" />
    </form>
  );
}
export default BloggerSearchForm;
