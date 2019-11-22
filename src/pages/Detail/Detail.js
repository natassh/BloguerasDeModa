import React from 'react';
import { Link } from 'react-router-dom';
import { getDetailBlogger } from '../../core/services/api';
import { getDetailRRSSBlogger } from '../../core/services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import Title from '../../ui/Components/Atoms/Title';
import RrssItem from '../../ui/Components/Atoms/RrssItem';

import './Detail.css';

class Detail extends React.Component {
  state = {
    blogger: {},
    rrssBlogger: ''
  };

  async getDataBlogger(idBlogger) {
    // Get data detail blogger
    const data = await getDetailBlogger(idBlogger);
    this.setState({ blogger: data });
    // Get data rrss blogger
    const rrssID = data.fields.datos_redes_sociales;
    const rrssData = await getDetailRRSSBlogger(rrssID);
    this.setState({ rrssBlogger: rrssData });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getDataBlogger(id);
  }

  render() {
    const { blogger, rrssBlogger } = this.state;
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
              {typeof rrssBlogger != 'undefined' &&
                Object.keys(rrssBlogger).length > 0 && (
                  <ul className="rrssList">
                    {rrssBlogger.fields.instagram && (
                      <RrssItem
                        className="instagram"
                        href={rrssBlogger.fields.instagram}
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </RrssItem>
                    )}
                    {rrssBlogger.fields.blog && (
                      <RrssItem className="blog" href={rrssBlogger.fields.blog}>
                        <FontAwesomeIcon icon={faBlog} />
                      </RrssItem>
                    )}
                    {rrssBlogger.fields.facebook && (
                      <RrssItem
                        className="facebook"
                        href={rrssBlogger.fields.facebook}
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </RrssItem>
                    )}
                    {rrssBlogger.fields.youtube && (
                      <RrssItem
                        className="youtube"
                        href={rrssBlogger.fields.youtube}
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </RrssItem>
                    )}
                  </ul>
                )}

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
