import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Event from './Event';
import { getAllEventsRequest, createPracticeSessionRequest } from '../../redux/events/events.actions';
import { selectAllEvents } from '../../redux/events/events.selectors';

class Timeline extends Component {
  render() {
    return (
      <div>
        {this.props.allEvents.map(event => (
          <Event
            key={event.event_id}
            event={event}
          />
        ))}
      </div>
    );
  }
}

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
