import React, { Component } from 'react';
import PropTypes from 'prop-types';

import People from './People';
import Items from './Items';
import { renderDuration } from '../services/datetime';

class Event extends Component {
  render() {
    const duration = renderDuration(this.props.start, this.props.end);

    return (
      <div>
        <div>
          <div>{this.props.name}</div>
          <div>{this.props.type}</div>
          <div>{duration}</div>
          <div>{this.props.rating}</div>
        </div>
        <People people={this.props.people} />
        <Items items={this.props.items} />
      </div>
    );
  }
}

Event.defaultProps = {
  end: undefined,
  rating: undefined,
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number,
  location: PropTypes.object,
  people: PropTypes.array,
  items: PropTypes.array,
};

export default Event;
