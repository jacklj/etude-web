import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
// set moment locale to be British English, so on the date pickers, weeks start
// on Monday (in US english, they start on Sunday).
import enGB from 'moment/locale/en-gb'; // eslint-disable-line no-unused-vars
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { history } from './redux/store';
import AppHeaderBar from './components/AppHeaderBar';
import NavigationDrawer from './components/NavigationDrawer/NavigationDrawer';
import Dashboard from './components/Dashboard/Dashboard';
import Timeline from './components/Timeline/Timeline';
import Lesson from './components/Lesson/Lesson';
import PracticeSession from './components/PracticeSession/PracticeSession';
import UpcomingRep from './components/upcomingRep/UpcomingRep';
import Performance from './components/Performance/Performance';
import AddNewRepertoire from './components/AddXPages/AddNewRepertoire';
import AddExercise from './components/AddXPages/AddExercise';
import AddLocation from './components/AddXPages/AddLocation';
import AddPerson from './components/AddXPages/AddPerson';
import { getAllEventsRequest } from './redux/events/events.actions';
import AllRepertoire from './components/AllRepertoire';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class App extends Component {
  state = {
    open: true,
  };

  componentDidMount() {
    // use dispatch function directly as the App component isn't a connected component
    this.props.store.dispatch(getAllEventsRequest());
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, store } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className={classes.root}>
            <CssBaseline />
            <AppHeaderBar
              isOpen={this.state.open}
              classes={classes}
              handleDrawerOpen={this.handleDrawerOpen}
            />
            <NavigationDrawer
              isOpen={this.state.open}
              classes={classes}
              handleDrawerClose={this.handleDrawerClose}
            />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/events" component={Timeline} />
              <Route exact path="/all-rep" component={AllRepertoire} />
              <Route path="/upcoming-rep" component={UpcomingRep} />
              <Route path="/lesson/:id" component={Lesson} />
              <Route path="/practice_session/:id" component={PracticeSession} />
              <Route path="/performance/:id" component={Performance} />
              <Route path="/add-rep" component={AddNewRepertoire} />
              <Route path="/add-exercise" component={AddExercise} />
              <Route path="/add-location" component={AddLocation} />
              <Route path="/add-person" component={AddPerson} />
            </main>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(App);
