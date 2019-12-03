import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import BloggerBox from '../BloggerBox';

import './ListOfBloggers.css';

const ListOfBloggers = ({ filteredBloggers }) => (
  <section className="ListOfBloggers">
    {filteredBloggers.map(blogger => {
      return (
        <Link to={`/blogger/${blogger.id}`} key={blogger.id}>
          <BloggerBox
            id={blogger.id}
            name={blogger.fields.blog_name}
            src={blogger.fields.image[0].url}
            alt={blogger.fields.blog_name}
          />
        </Link>
      );
    })}
  </section>
);

export default ListOfBloggers;

BloggerBox.propTypes = {
  filteredBloggers: PropTypes.array
};
