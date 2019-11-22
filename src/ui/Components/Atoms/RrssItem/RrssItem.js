import React from 'react';
import PropTypes from 'prop-types';

import './RrssItem.css';

//ReactDOM.render(element, document.body)
function RrssItem({ className, href, children }) {
  return (
    <li>
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </li>
  );
}

export default RrssItem;

RrssItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
  //children: PropTypes.string
};
