import React from 'react';
import PropTypes from 'prop-types';

import './BloggerBox.css';

function BloggerBox({ id, src, name, alt }) {
  return (
    <article className="ListOfBloggers__BloggerBox" id={id}>
      <figure>
        <img src={src} alt={alt} />
      </figure>
      <h2>{name}</h2>
    </article>
  );
}
export default BloggerBox;

BloggerBox.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string
};
