import React from 'react';

import Input from '../../Atoms/Input';
import ButtonSearch from '../../Atoms/ButtonSearch';

import './BloggerSearchForm.css';

class BloggerSearchForm extends React.Component {
  state = {
    bloggerName: ''
  };

  handleWhenValueInputChange = inputNewValue => {
    //console.log(inputNewValue);
    this.setState({ bloggerName: inputNewValue });
  };

  handleSubmit = e => {
    e.preventDefault();
    const Bloggers = this.props.listBloggers;
    //console.log(Bloggers);
  };
  render() {
    return (
      <form className="BloggerSearchForm" onSubmit={this.handleSubmit}>
        <Input inputChanged={this.handleWhenValueInputChange} />
        <ButtonSearch type="submit" value="Buscar" />
      </form>
    );
  }
}
export default BloggerSearchForm;
