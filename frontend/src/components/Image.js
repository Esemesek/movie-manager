import React from 'react';
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

export default Image;
