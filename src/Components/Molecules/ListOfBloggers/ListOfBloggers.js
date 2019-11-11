import React from 'react';

import BloggerBox from '../BloggerBox';
import image from '../../../assets/images/lp.jpg';

import './ListOfBloggers.css';

function ListOfBloggers() {
  return (
    <section className="ListOfBloggers">
      <BloggerBox name="Lovely Pepa" src={image} />
      <BloggerBox name="Lovely Pepa" src={image} />
      <BloggerBox name="Lovely Pepa" src={image} />
      <BloggerBox name="Lovely Pepa" src={image} />
      <BloggerBox name="Lovely Pepa" src={image} />
      <BloggerBox name="Lovely Pepa" src={image} />
      <BloggerBox name="Lovely Pepa" src={image} />
    </section>
  );
}
export default ListOfBloggers;
