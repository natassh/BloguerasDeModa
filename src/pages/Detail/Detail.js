import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../Components/Atoms/Title';

import { app_key } from '../../App/App-config';
import { db_name } from '../../App/App-config';

import './Detail.css';

class Detail extends React.Component {
  state = {
    blogger: {}
  };

  fetchBlogger(idBlogger) {
    const endoPointBloggerDetail = `https://api.airtable.com/v0/${app_key}/${db_name}/${idBlogger}`;
    const options = {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer keyVRnE63H7lG8smk'
      }
    };
    fetch(endoPointBloggerDetail, options)
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        this.setState({ blogger: data });
      });
  }
  componentDidMount() {
    //console.log(this.props);
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
