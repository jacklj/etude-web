import React, { Component } from 'react';
import PropTypes from 'prop-types';
import vextab from 'vextab/releases/vextab-div'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

import { ITEM_TYPES } from '../../../constants';
import { Card } from '../styledComponents';
import Exercise from './Exercise';
import Piece from './Piece';
import { deleteRepOrExerciseInstanceRequest } from '../../../redux/repOrExerciseInstances/repOrExerciseInstances.actions';

class RepOrExerciseInstance extends Component {
  constructor(props) {
    super(props);

    this.removeInstanceFromEvent = this.removeInstanceFromEvent.bind(this);
  }

  removeInstanceFromEvent() {
    const itemId = this.props.repOrExerciseInstance.rep_or_exercise_instance_id;
    const { eventId } = this.props;
    this.props.deleteRepOrExerciseInstanceRequest(itemId, eventId);
  }

  render() {
    const { repOrExerciseInstance } = this.props;
    let jsx;
    switch (repOrExerciseInstance.type) {
      case ITEM_TYPES.EXERCISE: {
        const exercise = repOrExerciseInstance;
        jsx = (
          <Exercise
            key={exercise.rep_or_exercise_instance_id}
            name={exercise.name}
            details={exercise.details}
            score={exercise.score}
            teacherWhoCreatedItFirstName={
              exercise.teacher_who_created_it.first_name
            }
            teacherWhoCreatedItSurname={
              exercise.teacher_who_created_it.surname
            }
          />
        );
        break;
      }
      case ITEM_TYPES.PIECE: {
        const piece = repOrExerciseInstance;
        jsx = (
          <Piece
            key={piece.rep_or_exercise_instance_id}
            name={piece.name}
            composerFirstName={piece.composer.first_name}
            composerSurname={piece.composer.surname}
            compositionDate={piece.composition_date}
            largerWork={piece.larger_work}
            characterThatSingsIt={piece.character_that_sings_it}
          />
        );
        break;
      }
      default: {
        jsx = undefined;
      }
    }
    return (
      <Card>
        {jsx}
        <button type="button" onClick={this.removeInstanceFromEvent}>Remove</button>
      </Card>
    );
  }
}

RepOrExerciseInstance.propTypes = {
  eventId: PropTypes.number.isRequired,
  repOrExerciseInstance: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  deleteRepOrExerciseInstanceRequest: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  deleteRepOrExerciseInstanceRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(RepOrExerciseInstance);
