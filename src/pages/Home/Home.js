import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../../Components/Atoms/Title';
import BloggerSearchForm from '../../Components/Molecules/BloggerSearchForm';
import ListOfBloggers from '../../Components/Molecules/ListOfBloggers';

import '../../App/styles/app.css';
import './Home.css';

class Home extends React.Component {
  state = {
    listBloggers: []
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
    console.log(blogger);
    //this.setState({ listBloggers: results.message });
  };

  render() {
    //console.log(this.state.listBloggers);
    const listBloggers = this.state.listBloggers;
    return (
      <>
        <Title className="Title">
          <strong>Blogueras</strong> de moda
        </Title>
        <Link to="/detail">Detalle</Link>
        <BloggerSearchForm
          listBloggers={listBloggers}
          onGetBloggerSelected={this.handleBlogger}
        />
        <ListOfBloggers />
      </>
    );
  }
}
export default Home;
