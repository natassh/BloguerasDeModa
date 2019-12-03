import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  getDetailBlogger,
  getDetailRRSSBlogger
} from '../../../core/services/api';

import Title from '../../Components/Atoms/Title';
import SocialLinks from '../../Components/Molecules/SocialLinks';

import './Detail.css';

const Detail = () => {
  const [state, setState] = useState({
    blogger: {},
    rrssBlogger: {}
  });

  const { id } = useParams();

  useEffect(() => {
    getDataBlogger(id);
  }, [id]);

  const getDataBlogger = async idBlogger => {
    // Get data detail blogger
    const data = await getDetailBlogger(idBlogger);
    // Get data rrss blogger
    const rrssID = data.datos_redes_sociales;
    const rrssData = await getDetailRRSSBlogger(rrssID);
    setState({ rrssBlogger: rrssData, blogger: data });
  };

  const { blogger, rrssBlogger } = state;
  return (
    <>
      <Title className="Title">
        <strong>Blogueras</strong> de moda
      </Title>
      {Object.keys(blogger).length > 0 && (
        <article className="BoxDetail">
          <figure>
            <img src={blogger.image[0].url} alt={blogger.name} />
          </figure>
          <div>
            <h2>{blogger.blog_name}</h2>
            <h3>{blogger.name}</h3>
            <p>{blogger.description}</p>
            {Object.keys(rrssBlogger).length > 0 && (
              <SocialLinks rrssBlogger={rrssBlogger} />
            )}
            <Link to={`/`} className="return">
              Volver al buscador
            </Link>
          </div>
        </article>
      )}
    </>
  );
};

export default Detail;
