import React from 'react';
import PropTypes from 'prop-types';

import Person from './Person';
import { Title } from '../itemSections';

const People = ({ people }) => (
  <div>
    <Title>People</Title>
    {people.map(person => (
      <Person
        key={`${person.first_name} ${person.surname}`}
        firstName={person.first_name}
        surname={person.surname}
        role={person.role}
      />
    ))}
  </div>
);

People.defaultProps = {
  people: [],
};

People.propTypes = {
  // TODO 28/7/2018 improve proptype definitions
  people: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

export default People;
