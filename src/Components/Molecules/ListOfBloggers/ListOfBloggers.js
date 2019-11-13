import React from 'react';

import BloggerBox from '../BloggerBox';
import image from '../../../assets/images/lp.jpg';

import './ListOfBloggers.css';

class ListOfBloggers extends React.Component {
  render() {
    const blogger = this.props.blogger;
    console.log(typeof blogger); //Object
    if (blogger) {
      const name = blogger.fields.name;
      console.log(name); //object
    }

    //const blog_name = name.blog_name;
    //console.log(blog_name);

    return (
      <section className="ListOfBloggers">
        <BloggerBox
          name={'Lovely Pepa'}
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
}
export default ListOfBloggers;
