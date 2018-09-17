/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  finishPracticingRequest,
  startPracticingRequest,
} from '../../redux/events/events.actions';
import { toHHMMSS } from '../../services/datetime';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.finishPracticeSession = this.finishPracticeSession.bind(this);
    this.startPracticeSession = this.startPracticeSession.bind(this);
  }

  finishPracticeSession() {
    const { eventId } = this.props;
    this.props.finishPracticingRequest(eventId);
  }

  startPracticeSession() {
    const { eventId } = this.props;
    this.props.startPracticingRequest(eventId);
  }

  render() {
    const { start, end, practiceSessionTimer } = this.props;

    const startFormatted = start && moment(start).format('H:mm dddd Do MMMM');
    const endFormatted = end && moment(end).format('H:mm dddd Do MMMM');
    const timer = typeof practiceSessionTimer === 'undefined' ? undefined : toHHMMSS(practiceSessionTimer);

    return (
      <div>
        {start ? (
          <div>Started.</div>
        ) : (
          <button type="button" onClick={this.startPracticeSession}>
            Start
          </button>
        )}
        <div>Start: {startFormatted}</div>
        <div>{timer}</div>
        <div>End: {endFormatted}</div>

        {end ? (
          <div>Finished.</div>
        ) : (
          <button type="button" onClick={this.finishPracticeSession}>
            Finish
          </button>
        )}
      </div>
    );
  }
}

Timer.defaultProps = {
  eventId: undefined,
  start: undefined,
  end: undefined,
  practiceSessionTimer: undefined,
};

Timer.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  eventId: PropTypes.number,
  practiceSessionTimer: PropTypes.number,
  finishPracticingRequest: PropTypes.func.isRequired,
  startPracticingRequest: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  startPracticingRequest,
  finishPracticingRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Timer);
