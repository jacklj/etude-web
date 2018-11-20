import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Nav, StyledLink } from './common/styledComponents';
import {
  createPracticeSessionRequest,
  createLessonRequest,
  createPerformanceRequest,
} from '../redux/events/events.actions';

class Navigation extends Component {
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
    return (
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/upcoming-rep">Upcoming rep</StyledLink>
        | New:
        <button type="button" onClick={this.createThenGoToNewLesson}>Add lesson</button>
        <button type="button" onClick={this.createThenGoToNewPracticeSession}>Add practice session</button>
        <button type="button" onClick={this.createThenGoToNewPerformance}>Add performance</button>
        <StyledLink to="/add-rep">Add rep</StyledLink>
        <StyledLink to="/add-location">Add location</StyledLink>
        <StyledLink to="/add-person">Add person</StyledLink>
      </Nav>
    );
  }
}

Navigation.propTypes = {
  createPracticeSessionRequest: PropTypes.func.isRequired,
  createLessonRequest: PropTypes.func.isRequired,
  createPerformanceRequest: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  createPracticeSessionRequest,
  createLessonRequest,
  createPerformanceRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
