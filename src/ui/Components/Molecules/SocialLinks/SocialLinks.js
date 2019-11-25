import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebookF,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import RrssItem from '../../Atoms/RrssItem';

import './SocialLinks.css';

class SocialLinks extends React.Component {
  render() {
    const { rrssBlogger } = this.props;
    return (
      <ul className="rrssList">
        {rrssBlogger.fields.instagram && (
          <RrssItem className="instagram" href={rrssBlogger.fields.instagram}>
            <FontAwesomeIcon icon={faInstagram} />
          </RrssItem>
        )}
        {rrssBlogger.fields.blog && (
          <RrssItem className="blog" href={rrssBlogger.fields.blog}>
            <FontAwesomeIcon icon={faBlog} />
          </RrssItem>
        )}
        {rrssBlogger.fields.facebook && (
          <RrssItem className="facebook" href={rrssBlogger.fields.facebook}>
            <FontAwesomeIcon icon={faFacebookF} />
          </RrssItem>
        )}
        {rrssBlogger.fields.youtube && (
          <RrssItem className="youtube" href={rrssBlogger.fields.youtube}>
            <FontAwesomeIcon icon={faYoutube} />
          </RrssItem>
        )}
      </ul>
    );
  }
}

export default SocialLinks;

SocialLinks.propTypes = {
  rrssBlogger: PropTypes.object
};
