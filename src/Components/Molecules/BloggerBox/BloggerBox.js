import React from 'react';
import PropTypes from 'prop-types';

import './BloggerBox.css';

function BloggerBox({ src, name, alt }) {
  return (
    <article className="ListOfBloggers__BloggerBox">
      <a href="#">
        <figure>
          <img src={src} alt={alt} />
        </figure>
        <h2>{name}</h2>
      </a>
    </article>
  );
}
export default BloggerBox;

BloggerBox.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string
};
