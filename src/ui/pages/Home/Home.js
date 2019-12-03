import React, { useState, useEffect } from 'react';
import { getListBloggers } from '../../../core/services/api';

import Title from '../../Components/Atoms/Title';
import BloggerSearchForm from '../../Components/Molecules/BloggerSearchForm';
import ListOfBloggers from '../../Components/Molecules/ListOfBloggers';
import MessageError from '../../Components/Atoms/MessageError';

import '../../App/styles/app.css';
import './Home.css';

const Home = () => {
  const [state, setState] = useState({
    listBloggers: {},
    filteredBloggers: [],
    errorMessage: ''
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getListBloggers();
      setState({
        ...state,
        listBloggers: data
      });
    }
    if (Object.entries(state.listBloggers).length === 0) {
      fetchData();
    }
  }, [state]);

  const handleBlogger = blogger => {
    const { listBloggers } = state;
    const listBloggersFiltered = [];
    listBloggers.records.forEach(bloggerFiltered => {
      const blog_name = bloggerFiltered.fields.blog_name;
      const name = bloggerFiltered.fields.name;
      if (
        typeof blog_name !== 'undefined' &&
        (blog_name.toUpperCase() === blogger.toUpperCase() ||
          name.toUpperCase().includes(blogger.toUpperCase()) ||
          blog_name.toUpperCase().includes(blogger.toUpperCase()))
      ) {
        listBloggersFiltered.push(bloggerFiltered);
      }
    });
    let errorMessageText = '';
    if (listBloggersFiltered.length <= 0) {
      errorMessageText =
        'Ups, a esa chica no la tenemos. Prueba a buscar otra!';
    }
    setState({
      ...state,
      errorMessage: errorMessageText,
      filteredBloggers: listBloggersFiltered
    });
  };

  const { filteredBloggers, errorMessage } = state;
  return (
    <>
      <Title className="Title">
        <strong>Blogueras</strong> de moda
      </Title>
      <BloggerSearchForm onGetBloggerSelected={handleBlogger} />
      <ListOfBloggers filteredBloggers={filteredBloggers} />
      {errorMessage !== '' && (
        <MessageError errorMessage={errorMessage} className="MessageError" />
      )}
    </>
  );
};

export default Home;
