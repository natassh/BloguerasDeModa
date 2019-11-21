import React from 'react';
import { Link } from 'react-router-dom';
import { getDetailBlogger } from '../../core/services/api';

import Title from '../../ui/Components/Atoms/Title';

import './Detail.css';

class Detail extends React.Component {
  state = {
    blogger: {}
  };

  async fetchBlogger(idBlogger) {
    const data = await getDetailBlogger(idBlogger);
    this.setState({ blogger: data });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchBlogger(id);
  }

  render() {
    const { blogger } = this.state;
    return (
      <>
        <Title className="Title">
          <strong>Blogueras</strong> de moda
        </Title>
        {typeof blogger != 'undefined' && Object.keys(blogger).length > 0 && (
          <article className="BoxDetail">
            <figure>
              <img
                src={blogger.fields.image[0].url}
                alt={blogger.fields.name}
              />
            </figure>
            <div>
              <h2>{blogger.fields.blog_name}</h2>
              <h3>{blogger.fields.name}</h3>
              <p>{blogger.fields.description}</p>
              <Link to={`/`} className="return">
                Volver al buscador
              </Link>
            </div>
          </article>
        )}
      </>
    );
  }
}

export default Detail;
