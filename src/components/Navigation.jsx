import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Nav, StyledLink } from './common/styledComponents';
import { createPracticeSessionRequest } from '../redux/events/events.actions';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.goToNewPracticeSession = this.goToNewPracticeSession.bind(this);
  }

  goToNewPracticeSession() {
    // dispatch createPracticeSession action
    // saga creates a new practice session
    // and routes us to its page (when it's been created)
    this.props.createPracticeSessionRequest();
  }

  render() {
    return (
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/upcoming-rep">Upcoming rep</StyledLink>
        | New:
        <StyledLink to="/add-lesson">Add lesson</StyledLink>
        <button type="button" onClick={this.goToNewPracticeSession}>Add Practice</button>
      </Nav>
    );
  }
}

Navigation.propTypes = {
  createPracticeSessionRequest: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  createPracticeSessionRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
