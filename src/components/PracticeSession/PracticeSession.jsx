/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  deleteEventRequest,
  eventFetchRequest,
  finishPracticingRequest,
  startPracticingRequest,
  restartPracticeSession,
} from '../../redux/events/events.actions';
import { selectEvent } from '../../redux/events/events.selectors';
import { toHHMMSS } from '../../services/datetime';

class PracticeSession extends Component {
  constructor(props) {
    super(props);

    this.deletePracticeSession = this.deletePracticeSession.bind(this);
    this.finishPracticeSession = this.finishPracticeSession.bind(this);
    this.startPracticeSession = this.startPracticeSession.bind(this);
  }

  componentDidMount() {
    // getPracticeSession to ensure it's up to date in the store (e.g. if user navigates
    // directly to a specific practice session page)
    this.props.eventFetchRequest(this.props.eventId);
  }

  componentDidUpdate(prevProps) {
    if (
      // if the practiceSession object has just been got...
      this.props.practiceSession !== prevProps.practiceSession
      // .. then, if the practice session is in progress (previously started and
      // not finished), then start the timer immediately
      && this.props.practiceSession
      && this.props.practiceSession.start
      && !this.props.practiceSession.end
    ) {
      const { start } = this.props.practiceSession;
      const now = moment();
      const initialTimeElapsed = now.diff(start, 'seconds');
      this.props.restartPracticeSession(initialTimeElapsed);
    }
  }

  deletePracticeSession() {
    if (window.confirm('Delete this practice session? (you will be sent back to the Timeline)')) {
      const { practiceSession } = this.props;
      this.props.deleteEventRequest(practiceSession.event_id);
    }
  }

  finishPracticeSession() {
    const { practiceSession } = this.props;
    this.props.finishPracticingRequest(practiceSession.event_id);
  }

  startPracticeSession() {
    const { practiceSession } = this.props;
    this.props.startPracticingRequest(practiceSession.event_id);
  }

  render() {
    const { practiceSessionTimer } = this.props;
    let jsx;
    if (!this.props.practiceSession) {
      jsx = <div>Loading</div>;
    } else {
      const { start, end } = this.props.practiceSession;

      const startFormatted = start && moment(start).format('H:mm dddd Do MMMM');
      const endFormatted = end && moment(end).format('H:mm dddd Do MMMM');

      const timer = typeof practiceSessionTimer === 'undefined' ? undefined : toHHMMSS(practiceSessionTimer);

      jsx = (
        <div>
          <h3>Practice session</h3>
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
          <div>
            <button type="button" onClick={this.deletePracticeSession}>
              Delete practice session
            </button>
          </div>
        </div>
      );
    }
    return jsx;
  }
}

PracticeSession.defaultProps = {
  practiceSession: undefined,
  practiceSessionTimer: undefined,
};

PracticeSession.propTypes = {
  eventId: PropTypes.number.isRequired,
  practiceSession: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  eventFetchRequest: PropTypes.func.isRequired,
  deleteEventRequest: PropTypes.func.isRequired,
  finishPracticingRequest: PropTypes.func.isRequired,
  startPracticingRequest: PropTypes.func.isRequired,
  restartPracticeSession: PropTypes.func.isRequired,
  practiceSessionTimer: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => ({
  // ownProps isn't recursive - just props supplied from 'above'
  eventId: Number(ownProps.match.params.id),
  practiceSession: selectEvent(state, ownProps),
  practiceSessionTimer: state.events.practiceSessionTimer,
});

const mapDispatchToProps = {
  deleteEventRequest,
  eventFetchRequest,
  startPracticingRequest,
  finishPracticingRequest,
  restartPracticeSession,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PracticeSession);
