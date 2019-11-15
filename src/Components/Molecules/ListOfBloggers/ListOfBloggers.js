import React from 'react';
import PropTypes from 'prop-types';

import BloggerBox from '../BloggerBox';

import './ListOfBloggers.css';

class ListOfBloggers extends React.Component {
  render() {
    const { filteredBloggers } = this.props;
    return (
      <section className="ListOfBloggers">
        {filteredBloggers.map(blogger => {
          return (
            <BloggerBox
              key={blogger.id}
              name={blogger.fields.blog_name}
              src={blogger.fields.image[0].url}
              alt={blogger.fields.blog_name}
            />
          );
        })}
      </section>
    );
  }
}
export default ListOfBloggers;

BloggerBox.propTypes = {
  filteredBloggers: PropTypes.array
};
