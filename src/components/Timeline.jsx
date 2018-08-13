import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Event from './Event';
import { getTimeline } from '../services/api';
import { allEventsFetchRequest } from '../redux/actions/events';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
    };
  }

  componentDidMount() {
    this.props.allEventsFetchRequest();
    getTimeline().then(timeline => Array.isArray(timeline) && this.setState({ timeline }));
  }

  render() {
    const { timeline } = this.state;
    return (
      <div>
        {timeline.map(event => (
          <Event
            key={`${event.start} - ${event.end}`}
            id={event.id}
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
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  allEventsFetchRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
