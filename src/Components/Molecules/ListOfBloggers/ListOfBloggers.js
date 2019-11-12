import React from 'react';

import BloggerBox from '../BloggerBox';
import image from '../../../assets/images/lp.jpg';

import './ListOfBloggers.css';

function ListOfBloggers() {
  return (
    <section className="ListOfBloggers">
      <BloggerBox
        name="Lovely Pepa"
        src={image}
        alt="Imagen de la bloguera Lovely Peppa"
      />
      <BloggerBox
        name="Lovely Pepa"
        src={image}
        alt="Imagen de la bloguera Lovely Peppa"
      />
      <BloggerBox
        name="Lovely Pepa"
        src={image}
        alt="Imagen de la bloguera Lovely Peppa"
      />
      <BloggerBox
        name="Lovely Pepa"
        src={image}
        alt="Imagen de la bloguera Lovely Peppa"
      />
      <BloggerBox
        name="Lovely Pepa"
        src={image}
        alt="Imagen de la bloguera Lovely Peppa"
      />
    </section>
  );
}
export default ListOfBloggers;
