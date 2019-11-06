import React from 'react';
import { Link } from 'react-router-dom';

import './Detail.css';

function Detail() {
  return (
    <>
      <h1>Detalle</h1>
      <Link to={`/`} className="return">
        Volver
      </Link>
    </>
  );
}

export default Detail;
