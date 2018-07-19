import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Exercise extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.details}</div>
        <div>{`${this.props.teacherWhoCreatedItFirstName} ${this.props.teacherWhoCreatedItSurname}`}</div>
      </div>
    );
  }
}

Exercise.defaultProps = {
  details: undefined,
  teacherWhoCreatedItFirstName: undefined,
  teacherWhoCreatedItSurname: undefined,
};

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string,
  teacherWhoCreatedItFirstName: PropTypes.string,
  teacherWhoCreatedItSurname: PropTypes.string,
};

export default Exercise;
