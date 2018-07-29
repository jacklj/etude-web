import React, { Component } from 'react';

import Event from './Event';
import { getTimeline } from '../services/api';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
    };
  }

  componentDidMount() {
    getTimeline().then(timeline => this.setState({ timeline }));
  }

  render() {
    const { timeline } = this.state;
    return (
      <div>
        {timeline.map(event => (
          <Event
            key={`${event.start} - ${event.end}`}
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

export default Timeline;
