import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import EventSummaryCard from '../Timeline/EventSummaryCard/EventSummaryCard';
import { selectNextThreeEvents } from '../../redux/events/events.selectors';

function Next3UpcomingEvents({ nextThreeEvents }) {
  let nextThreeEventsJsx;
  if (nextThreeEvents && nextThreeEvents.length > 0) {
    nextThreeEventsJsx = nextThreeEvents.map(event => (
      <EventSummaryCard
        key={event.event_id}
        event={event}
      />
    ));
  } else {
    nextThreeEventsJsx = <div>No upcoming events.</div>;
  }
  return (
    <div>
      <Typography variant="h4" gutterBottom component="h2">
        Next 3 events
      </Typography>
      {nextThreeEventsJsx}
    </div>
  );
}

Next3UpcomingEvents.propTypes = {
  nextThreeEvents: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  nextThreeEvents: selectNextThreeEvents(state),
});

export default connect(mapStateToProps)(Next3UpcomingEvents);
