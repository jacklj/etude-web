import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Name, TeacherWhoCreatedIt } from './common/itemCards';

class Exercise extends Component {
  render() {
    return (
      <Card>
        <Name>{this.props.name}</Name>
        <TeacherWhoCreatedIt>{`${this.props.teacherWhoCreatedItFirstName} ${this.props.teacherWhoCreatedItSurname}`}</TeacherWhoCreatedIt>
        <div>{this.props.details}</div>
      </Card>
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
