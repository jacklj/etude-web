import React, { Component } from 'react';
import PropTypes from 'prop-types';
import vextab from 'vextab/releases/vextab-div';

import { Card, Name, TeacherWhoCreatedIt } from './common/itemCards';

class Exercise extends Component {
  render() {
    return (
      <Card>
        <Name>{this.props.name}</Name>
        <TeacherWhoCreatedIt>
          {`${this.props.teacherWhoCreatedItFirstName} ${this.props.teacherWhoCreatedItSurname}`}
        </TeacherWhoCreatedIt>
        {this.props.score && (
          <div className="vex-tabdiv" width={350} scale={0.8} editor="false">
            {this.props.score}
          </div>
        )}
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
  score: PropTypes.string,
  teacherWhoCreatedItFirstName: PropTypes.string,
  teacherWhoCreatedItSurname: PropTypes.string,
};

export default Exercise;
