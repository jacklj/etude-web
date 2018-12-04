import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classNames from 'classnames';

import {
  createPracticeSessionRequest,
  createLessonRequest,
  createPerformanceRequest,
} from '../../redux/events/events.actions';
import NavigationItem from './NavigationItem';

class NavigationDrawer extends Component {
  constructor(props) {
    super(props);
    this.createThenGoToNewPracticeSession = this.createThenGoToNewPracticeSession.bind(this);
    this.createThenGoToNewLesson = this.createThenGoToNewLesson.bind(this);
    this.createThenGoToNewPerformance = this.createThenGoToNewPerformance.bind(this);
  }

  createThenGoToNewPracticeSession() {
    // dispatch createPracticeSession action
    // saga creates a new practice session
    // and routes us to its page (when it's been created)
    this.props.createPracticeSessionRequest();
  }

  createThenGoToNewLesson() {
    this.props.createLessonRequest();
  }

  createThenGoToNewPerformance() {
    this.props.createPerformanceRequest();
  }

  render() {
    const { classes, isOpen, handleDrawerClose } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !isOpen && classes.drawerPaperClose,
          ),
        }}
        open={isOpen}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavigationItem
            link="/"
            icon={<DashboardIcon />}
            text="Dashboard"
          />
          <NavigationItem
            link="/events"
            icon={<LayersIcon />}
            text="All events"
          />
          <NavigationItem
            link="/upcoming-rep"
            icon={<ShoppingCartIcon />}
            text="Upcoming rep"
          />
          <NavigationItem
            onClick={this.createThenGoToNewPracticeSession}
            icon={<PeopleIcon />}
            text="Start Practicing"
          />
        </List>
        <Divider />
        <List>
          <ListSubheader inset>Add stuff</ListSubheader>
          <NavigationItem
            onClick={this.createThenGoToNewLesson}
            icon={<PeopleIcon />}
            text="Add lesson"
          />
          <NavigationItem
            onClick={this.createThenGoToNewPerformance}
            icon={<PeopleIcon />}
            text="Add performance"
          />
          <NavigationItem
            link="/add-rep"
            icon={<ShoppingCartIcon />}
            text="Add rep"
          />
          <NavigationItem
            link="/add-exercise"
            icon={<ShoppingCartIcon />}
            text="Add exercise"
          />
          <NavigationItem
            link="/add-location"
            icon={<ShoppingCartIcon />}
            text="Add location"
          />
          <NavigationItem
            link="/add-person"
            icon={<ShoppingCartIcon />}
            text="Add person"
          />
        </List>
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = {
  createPracticeSessionRequest: PropTypes.func.isRequired,
  createLessonRequest: PropTypes.func.isRequired,
  createPerformanceRequest: PropTypes.func.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  createPracticeSessionRequest,
  createLessonRequest,
  createPerformanceRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer);
