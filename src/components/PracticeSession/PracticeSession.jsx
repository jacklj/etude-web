/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  deleteEventRequest,
  eventFetchRequest,
  restartPracticeSession,
} from '../../redux/events/events.actions';
import { selectEvent } from '../../redux/events/events.selectors';
import Timer from './Timer';
import AddGeneralNote from '../common/notes/AddGeneralNote';
import GeneralNotes from '../common/notes/GeneralNotes';
import AddItem from '../common/items/AddItem';
import Items from '../common/items/Items';

class PracticeSession extends Component {
  constructor(props) {
    super(props);

    this.deletePracticeSession = this.deletePracticeSession.bind(this);
  }

  componentDidMount() {
    // getPracticeSession to ensure it's up to date in the store (e.g. if user navigates
    // directly to a specific practice session page)
    this.props.eventFetchRequest(this.props.eventId);
  }

  componentDidUpdate(prevProps) {
    // TODO 17/9/2018 extract the restart action dispatch logic into the (/a) saga
    // Dispatches a RESTART action in case the timer was previously started but isn't running
    // eg if you navigate directly to an in progress practice session
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

  render() {
    const { eventId, practiceSession, practiceSessionTimer } = this.props;

    let jsx;
    if (!practiceSession) {
      jsx = <div>Loading</div>;
    } else {
      const { start, end, notes, items } = practiceSession;

      jsx = (
        <div>
          <h3>Practice session</h3>
          <Timer
            start={start}
            end={end}
            practiceSessionTimer={practiceSessionTimer}
            eventId={eventId}
          />
          <div>
            <button type="button" onClick={this.deletePracticeSession}>
              Delete practice session
            </button>
          </div>
          <h3>Notes</h3>
          <AddGeneralNote eventId={eventId} />
          <GeneralNotes notes={notes} />
          <h3>Items</h3>
          <AddItem eventId={eventId} />
          <Items items={items} eventId={eventId} />
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
  restartPracticeSession,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PracticeSession);
