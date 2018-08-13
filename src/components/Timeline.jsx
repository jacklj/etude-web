import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Event from './Event';
import { allEventsFetchRequest } from '../redux/events/events.actions';
import { selectAllEventsAsArray } from '../redux/events/events.selectors';

class Timeline extends Component {
  componentDidMount() {
    this.props.allEventsFetchRequest();
  }

  render() {
    return (
      <div>
        {this.props.allEvents.map(event => (
          <Event
            key={`${event.start} - ${event.end}`}
            id={event.event_id}
            start={event.start}
            end={event.end}
            type={event.type}
            rating={event.rating}
            location={event.location}
            people={event.people}
            items={event.items}
          />
        ))}
      </div>
    );
  }
}

Timeline.propTypes = {
  allEventsFetchRequest: PropTypes.func.isRequired,
  allEvents: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  // TODO 13/8/2018 JackLJ improve proptype definitions
};

const mapStateToProps = state => ({
  allEvents: selectAllEventsAsArray(state),
});

const mapDispatchToProps = {
  allEventsFetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
