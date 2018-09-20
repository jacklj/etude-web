/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  deleteEventRequest,
  eventFetchRequest,
} from '../../redux/events/events.actions';
import { selectEvent } from '../../redux/events/events.selectors';
import Timer from './Timer';
import AddGeneralNote from '../common/notes/AddGeneralNote';
import GeneralNotes from '../common/notes/GeneralNotes';
import AddItem from '../common/items/AddItem';
import Items from '../common/items/Items';
import PracticeSessionDetails from './PracticeSessionDetails';

class PracticeSession extends Component {
  constructor(props) {
    super(props);
    this.deletePracticeSession = this.deletePracticeSession.bind(this);
  }

  componentDidMount() {
    // getPracticeSession to ensure it's up to date in the store (e.g. if user navigates
    // directly to a specific practice session page)
    // TODO 17th Sept 2018 could extract this to a saga
    this.props.eventFetchRequest(this.props.eventId);
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
      const { start, end, notes, items, location, rating } = practiceSession;

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
          <PracticeSessionDetails
            eventId={eventId}
            rating={rating}
            location={location}
          />
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PracticeSession);
