import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    if (repOrExerciseInstance.exercise_id) {
      const exercise = repOrExerciseInstance;
      jsx = <Exercise exerciseId={exercise.exercise_id} />;
    } else if (repOrExerciseInstance.repertoire_id) {
      const piece = repOrExerciseInstance;
      jsx = <Piece repertoireId={piece.repertoire_id} />;
    } else {
      jsx = undefined;
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