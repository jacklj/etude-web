import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Person from './Person';
import { Title } from './common/itemSections';

class People extends Component {
  render() {
    return (
      <div>
        <Title>People</Title>
        {this.props.people.map(person => <Person
          key={`${this.props.first_name} ${this.props.surname}`}
          firstName={person.first_name}
          surname={person.surname}
          role={person.role}
        />)}
      </div>
    );
  }
}

People.defaultProps = {
  people: undefined,
};

People.propTypes = {
  people: PropTypes.array,
};

export default People;
