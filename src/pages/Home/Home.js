import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../../Components/Atoms/Title';
import BloggerSearchForm from '../../Components/Molecules/BloggerSearchForm';
import ListOfBloggers from '../../Components/Molecules/ListOfBloggers';

import '../../App/styles/app.css';
import './Home.css';

function Home() {
  return (
    <>
      <Title className="title">Blogueras de moda</Title>
      <Link to="/detail">Detalle</Link>
      <BloggerSearchForm />
      <ListOfBloggers />
    </>
  );
}
export default Home;
