/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

import {
  deleteEventRequest,
  eventFetchRequest,
  finishPracticingRequest,
  startPracticingRequest,
} from '../../redux/events/events.actions';
import { selectEvent } from '../../redux/events/events.selectors';

momentDurationFormatSetup(moment);

class PracticeSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed: undefined,
    };

    this.deletePracticeSession = this.deletePracticeSession.bind(this);
    this.finishPracticeSession = this.finishPracticeSession.bind(this);
    this.startPracticeSession = this.startPracticeSession.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // getPracticeSession to ensure it's up to date in the store (e.g. if user navigates
    // directly to a specific practice session page)
    this.props.eventFetchRequest(this.props.eventId);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  deletePracticeSession() {
    if (window.confirm("Delete this practice session? (you will be sent back to the Timeline)")) {
      const { practiceSession } = this.props;
      clearInterval(this.timer); // in case the timer is running
      this.props.deleteEventRequest(practiceSession.event_id);
    }
  }

  finishPracticeSession() {
    const { practiceSession } = this.props;
    clearInterval(this.timer);
    this.props.finishPracticingRequest(practiceSession.event_id);
  }

  startPracticeSession() {
    const { practiceSession } = this.props;
    this.props.startPracticingRequest(practiceSession.event_id);
  }

  tick() {
    const { practiceSession } = this.props;
    if (practiceSession) {
      const start = moment(this.props.practiceSession.start);
      const now = moment();
      const diff = now.diff(start);
      const elapsed = moment.duration(diff);
      this.setState({ elapsed });
    }
  }

  render() {
    // start the timer immediately if the session has previously (or just) been started (and
    // is in progress i.e. not finished)
    if (
      this.props.practiceSession
      && this.props.practiceSession.start
      && !this.props.practiceSession.end
      && !this.timer
    ) {
      this.timer = setInterval(this.tick, 50);
    }

    const { elapsed } = this.state;
    let jsx;
    if (!this.props.practiceSession) {
      jsx = <div>Loading</div>;
    } else {
      const { start, end } = this.props.practiceSession;

      const startFormatted = start && moment(start).format('H:mm dddd Do MMMM');
      const endFormatted = end && moment(end).format('H:mm dddd Do MMMM');

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
          <div>{elapsed ? elapsed.format('hh:mm:ss') : null}</div>
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
};

PracticeSession.propTypes = {
  eventId: PropTypes.number.isRequired,
  practiceSession: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  eventFetchRequest: PropTypes.func.isRequired,
  deleteEventRequest: PropTypes.func.isRequired,
  finishPracticingRequest: PropTypes.func.isRequired,
  startPracticingRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  // ownProps isn't recursive - just props supplied from 'above'
  eventId: Number(ownProps.match.params.id),
  practiceSession: selectEvent(state, ownProps),
});

const mapDispatchToProps = {
  deleteEventRequest,
  eventFetchRequest,
  startPracticingRequest,
  finishPracticingRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PracticeSession);
