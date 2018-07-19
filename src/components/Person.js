import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  render() {
    return (
      <div>
        <b>People</b>
        <div>{this.props.firstName} {this.props.surname}</div>
        <div>{this.props.role}</div>
      </div>
    );
  }
}

Person.defaultProps = {
  role: undefined,
};

Person.propTypes = {
  firstName: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.string,
};

export default Person;
