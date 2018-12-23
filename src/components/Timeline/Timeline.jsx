import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EventSummaryCard from './EventSummaryCard/EventSummaryCard';
import { getAllEventsRequest, createPracticeSessionRequest } from '../../redux/events/events.actions';
import { selectAllEvents } from '../../redux/events/events.selectors';

const Timeline = ({ allEvents }) => (
  <div>
    {allEvents.map(event => (
      <EventSummaryCard
        key={event.event_id}
        event={event}
      />
    ))}
  </div>
);

Timeline.propTypes = {
  getAllEventsRequest: PropTypes.func.isRequired,
  allEvents: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  // TODO 13/8/2018 JackLJ improve proptype definitions
};

const mapStateToProps = state => ({
  allEvents: selectAllEvents(state),
});

const mapDispatchToProps = {
  getAllEventsRequest,
  createPracticeSessionRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
