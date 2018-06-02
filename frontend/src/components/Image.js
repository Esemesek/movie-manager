import React from 'react';
import PropTypes from 'prop-types';
import { Clear } from '@material-ui/icons';

const NO_IMAGE = 'N/A';

const Image = ({ src, alt, ...props }) => {
  if (src === NO_IMAGE) {
    return <Clear style={{ fontSize: 100 }} />;
  }

  return (
    <img src={src} alt={alt} {...props} />
  );
}

Image.propType = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
