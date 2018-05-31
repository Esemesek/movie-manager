import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const renderBackButton = (goBack, history) => {
  if (!goBack) {
    return null;
  }

  return (
    <Button onClick={history.goBack}>
      <ArrowBack />
    </Button>
  );
}

export const AppBannerContainer = ({ goBack, history }) => (
  <AppBar color="default" position="static">
    <Toolbar>
      {renderBackButton(goBack, history)}
      <Typography variant="title">
        Movie Manager
      </Typography>
    </Toolbar>
  </AppBar>
);

AppBannerContainer.propTypes = {
  goBack: PropTypes.bool,
  history: PropTypes.instanceOf(Object).isRequired,
};

AppBannerContainer.defaultProps = {
  goBack: false,
};

export default withRouter(AppBannerContainer);
