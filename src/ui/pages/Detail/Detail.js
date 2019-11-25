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
  //const [nombreState, funcionCambaiarVAlorEstado] = useState( valoeInoicial estado si queremo);

  const [state, setState] = useState({
    blogger: {},
    rrssBlogger: {}
  });

  const { id } = useParams();

  // por rendimiento, useState, puede recibir una función que su return es lo que mete en el stado, se usa por rendimienbtgo
  // const [state, setState] = useState( () => {{
  //   blogger: {},
  //   rrssBlogger: ''
  // }});

  // state = {
  //   blogger: {},
  //   rrssBlogger: ''
  // };

  // componentDidMount() {
  //   const id = this.props.match.params.id;
  //   this.getDataBlogger(id);
  // }

  useEffect(() => {
    getDataBlogger(id);
    return () => {
      console.log('cuando el componente se desmonta');
    };
  }, [id]);

  const getDataBlogger = async idBlogger => {
    // Get data detail blogger
    const data = await getDetailBlogger(idBlogger);
    // setState({ blogger: data });
    // Get data rrss blogger
    const rrssID = data.fields.datos_redes_sociales;
    const rrssData = await getDetailRRSSBlogger(rrssID);
    setState({ rrssBlogger: rrssData, blogger: data });
  };

  const { blogger, rrssBlogger } = state; // this.state pasa a ser state
  return (
    <>
      <Title className="Title">
        <strong>Blogueras</strong> de moda
      </Title>
      {Object.keys(blogger).length > 0 && (
        <article className="BoxDetail">
          <figure>
            <img src={blogger.fields.image[0].url} alt={blogger.fields.name} />
          </figure>
          <div>
            <h2>{blogger.fields.blog_name}</h2>
            <h3>{blogger.fields.name}</h3>
            <p>{blogger.fields.description}</p>
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
