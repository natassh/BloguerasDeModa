import React from 'react';

import Title from '../../Components/Atoms/Title';
import BloggerSearchForm from '../../Components/Molecules/BloggerSearchForm';
import ListOfBloggers from '../../Components/Molecules/ListOfBloggers';
import MessageError from '../../Components/Atoms/MessageError';

import '../../App/styles/app.css';
import './Home.css';

class Home extends React.Component {
  state = {
    listBloggers: [],
    filteredBloggers: [],
    errorMessage: ''
  };

  componentDidMount() {
    const app_key = 'app7a24aZSpdSNeO7';
    const db_name = 'Blogueras';
    const endoPoint = `https://api.airtable.com/v0/${app_key}/${db_name}`;
    const options = {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer keyVRnE63H7lG8smk'
      }
    };
    fetch(endoPoint, options)
      .then(res => res.json())
      .then(data => {
        this.setState({ listBloggers: data });
      });
  }

  handleBlogger = blogger => {
    const { listBloggers } = this.state;
    const listBloggersFiltered = [];
    listBloggers.records.forEach(bloggerFiltered => {
      const blog_name = bloggerFiltered.fields.blog_name;
      const name = bloggerFiltered.fields.name;
      if (
        typeof blog_name !== 'undefined' &&
        (blog_name.toUpperCase() === blogger.toUpperCase() ||
          name.toUpperCase().includes(blogger.toUpperCase()))
      ) {
        listBloggersFiltered.push(bloggerFiltered);
      }
    });
    if (listBloggersFiltered.length <= 0) {
      const message = 'Ups, a esa chica no la tenemos. Prueba a buscar otra!';
      this.setState({ errorMessage: message });
    } else {
      this.setState({ errorMessage: '' });
    }
    this.setState({ filteredBloggers: listBloggersFiltered });
  };

  render() {
    const { filteredBloggers, errorMessage } = this.state;
    return (
      <>
        <Title className="Title">
          <strong>Blogueras</strong> de moda
        </Title>
        <BloggerSearchForm onGetBloggerSelected={this.handleBlogger} />
        <ListOfBloggers filteredBloggers={filteredBloggers} />
        {errorMessage !== '' && (
          <MessageError errorMessage={errorMessage} className="MessageError" />
        )}
      </>
    );
  }
}
export default Home;
