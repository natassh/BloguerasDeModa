import React from 'react';
import ItemListStack from '../ItemListStack/ItemListStack';
import imageReact from '../../assets/images/react.png';
import imageTools from '../../assets/images/tools.png';
import imageCss from '../../assets/images/css3.png';
import imageHtml from '../../assets/images/html5.png';

import './ListStack.css';

function ListStack() {
  return (
    <ul className="list-stack">
      <ItemListStack
        src={imageReact}
        alt="Logo React"
        title="React"
        content="Proyecto desarrollado en React con consulta a la base de datos de Airtable. React-router, gestión de estado local, Componentes de tipo clase (cuando juego con el estado) y también funcionales."
      />
      <ItemListStack
        src={imageCss}
        alt="Logo CSS"
        title="CSS"
        content="Usando metodología BEM y Atomic Design para la división de los estilos. Con Custom properties para escribir CSS moderno."
      />
      <ItemListStack
        src={imageHtml}
        alt="Logo Html5"
        title="Html5"
        content="Marcado semántico (aside, section, figure, etc.)"
      />
      <ItemListStack
        src={imageTools}
        alt="Logo Tools"
        title="Tooling"
        content="Netlify para el deploy."
      />
    </ul>
  );
}

export default ListStack;
