import React from 'react';

import Input from '../../Atoms/Input';
import ButtonSearch from '../../Atoms/ButtonSearch';

import './BloggerSearchForm.css';

class BloggerSearchForm extends React.Component {
  state = {
    valueInput: ''
  };

  handleWhenValueInputChange = inputNewValue => {
    //console.log(inputNewValue);
    this.setState({ valueInput: inputNewValue });
  };

  handleSubmit = e => {
    e.preventDefault();
    const valueInput = this.state.valueInput; //el valor que meto en el input
    const bloggersDB = this.props.listBloggers.records; //array db de las blogueras
    bloggersDB.map(blogger => {
      const blogName = blogger.fields.blog_name;
      //console.log(blogName);
      if (blogName === valueInput.toLowerCase() && blogName !== 'undefined') {
        const { onGetBloggerSelected } = this.props;
        onGetBloggerSelected(blogger);
      } else {
        return 'no';
      }
    });
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
