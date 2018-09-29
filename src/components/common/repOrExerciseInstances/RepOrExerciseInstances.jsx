import React from 'react';
import PropTypes from 'prop-types';

import RepOrExerciseInstance from './RepOrExerciseInstance';
import { ItemsOrNotesContainer } from '../styledComponents';

const RepOrExerciseInstances = ({ eventId, repOrExerciseInstances }) => (
  <ItemsOrNotesContainer>
    {repOrExerciseInstances
      && repOrExerciseInstances.map(repOrExerciseInstance => (
        <RepOrExerciseInstance
          repOrExerciseInstance={repOrExerciseInstance}
          key={repOrExerciseInstance.rep_or_exercise_instance_id}
          eventId={eventId}
        />
      ))}
  </ItemsOrNotesContainer>
);

RepOrExerciseInstances.defaultProps = {
  repOrExerciseInstances: undefined,
};

RepOrExerciseInstances.propTypes = {
  repOrExerciseInstances: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  eventId: PropTypes.number.isRequired,
};

export default RepOrExerciseInstances;
