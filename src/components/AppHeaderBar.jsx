import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

const renderAppBarTitle = currentPath => {
  const firstBitOfPath = currentPath === '/' ? '/' : currentPath.split('/')[1];
  switch (firstBitOfPath) {
    case 'events':
      return 'All events';
    case 'upcoming-rep':
      return 'Upcoming repertoire';
    case 'lesson':
      return 'Lesson';
    case 'practice_session':
      return 'Practice';
    case 'performance':
      return 'Performance';
    case 'add-rep':
      return 'Add repertoire';
    case 'add-exercise':
      return 'Add exercise';
    case 'add-location':
      return 'Add location';
    case 'add-person':
      return 'Add person';
    default:
      return 'Stanza';
  }
};

const AppHeaderBar = ({ pathname, isOpen, handleDrawerOpen, classes }) => {
  const title = renderAppBarTitle(pathname);
  return (
    <AppBar
      position="absolute"
      className={classNames(
        classes.appBar,
        isOpen && classes.appBarShift,
      )}
    >
      <Toolbar disableGutters={!isOpen} className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(
            classes.menuButton,
            isOpen && classes.menuButtonHidden,
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          {title}
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

AppHeaderBar.propTypes = {
  pathname: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  handleDrawerOpen: PropTypes.func.isRequired,
};


const mapStateToProps = state => {
  console.log(state)
  return {
    pathname: state.router.location.pathname,
  };
}

export default connect(mapStateToProps)(AppHeaderBar);
