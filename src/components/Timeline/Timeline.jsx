import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Event from './Event';
import { allEventsFetchRequest, startPracticingRequest } from '../../redux/events/events.actions';
import { selectAllEventsAsArray } from '../../redux/events/events.selectors';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.startPracticing = this.startPracticing.bind(this);
  }

  componentDidMount() {
    this.props.allEventsFetchRequest();
  }

  startPracticing() {
    // dispatch startPracticing action
    // saga creates a new practice session
    // and routes us to it (when it's been created)
    this.props.startPracticingRequest();
  }

  render() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.startPracticing}>Practice</button>
        </div>
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
  allEventsFetchRequest: PropTypes.func.isRequired,
  startPracticingRequest: PropTypes.func.isRequired,
  allEvents: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  // TODO 13/8/2018 JackLJ improve proptype definitions
};

const mapStateToProps = state => ({
  allEvents: selectAllEventsAsArray(state),
});

const mapDispatchToProps = {
  allEventsFetchRequest,
  startPracticingRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
