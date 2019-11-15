import React from 'react';
import PropTypes from 'prop-types';

import Emoji from '../Emoji';
import './MessageError.css';

const MessageError = ({ className, errorMessage }) => (
  <p className={className}>
    <Emoji symbol="😅" label="in a hurry emoji" /> {errorMessage}
  </p>
);

export default MessageError;

MessageError.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
