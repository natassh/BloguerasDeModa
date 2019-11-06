import React from 'react';
import { Link } from 'react-router-dom';

import '../../App/styles/app.css';
import './Home.css';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/detail">Detalle</Link>
    </>
  );
}
export default Home;
