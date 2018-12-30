import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EventSummaryCard from './EventSummaryCard/EventSummaryCard';
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
  allEvents: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  // TODO 13/8/2018 JackLJ improve proptype definitions
};

const mapStateToProps = state => ({
  allEvents: selectAllEvents(state),
});

export default connect(mapStateToProps)(Timeline);
