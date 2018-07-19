import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Event extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.type}</div>
        <div>{this.props.start}-{this.props.end}</div>
        <div>{this.props.rating}</div>
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
