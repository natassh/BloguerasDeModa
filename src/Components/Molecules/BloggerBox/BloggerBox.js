import React from 'react';

import './BloggerBox.css';

function BloggerBox({ src, name }) {
  return (
    <article className="ListOfBloggers__BloggerBox">
      <a href="#">
        <figure>
          <img src={src} />
        </figure>
        <h2>{name}</h2>
      </a>
    </article>
  );
}
export default BloggerBox;
