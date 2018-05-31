import React from 'react';
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

const AppBanner = ({ goBack, history }) => (
  <AppBar color="default" position="static">
    <Toolbar>
      {renderBackButton(goBack, history)}
      <Typography variant="title">
        Movie Manager
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withRouter(AppBanner);
