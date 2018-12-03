import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreatableSelect from 'react-select/lib/Creatable';
import Select from 'react-select';

import { getAllRepertoireRequest, createRepertoireFromRepSelector } from '../../../redux/repertoire/repertoire.actions';
import { getAllExercisesRequest } from '../../../redux/exercises/exercises.actions';
import {
  createRepertoireInstanceRequest,
  createExerciseInstanceRequest,
} from '../../../redux/repOrExerciseInstances/repOrExerciseInstances.actions';
import { selectRepertoireForDropdown } from '../../../redux/repertoire/repertoire.selectors';
import { selectExercisesForDropdown } from '../../../redux/exercises/exercises.selectors';

const VIEW = {
  DEFAULT: 'VIEW.DEFAULT',
  ADD_EXERCISE: 'VIEW.ADD_EXERCISE',
  ADD_PIECE: 'VIEW.ADD_PIECE',
};

const initialState = {
  exercise: null,
  piece: null,
  view: VIEW.DEFAULT,
};

class AddRepOrExerciseInstance extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };

    this.showAddPiece = this.showAddPiece.bind(this);
    this.showAddExercise = this.showAddExercise.bind(this);
    this.cancelAddingItem = this.cancelAddingItem.bind(this);
    this.handleExercisesDropdownChange = this.handleExercisesDropdownChange.bind(this);
    this.handlePieceInstanceSubmit = this.handlePieceInstanceSubmit.bind(this);
    this.handleExerciseInstanceSubmit = this.handleExerciseInstanceSubmit.bind(this);
    this.handleRepertoireDropdownChange = this.handleRepertoireDropdownChange.bind(this);
  }

  componentDidMount() {
    const { canAddExercises, canAddRepertoire } = this.props;
    if (canAddRepertoire) this.props.getAllRepertoireRequest();
    if (canAddExercises) this.props.getAllExercisesRequest();
  }

  handleRepertoireDropdownChange(newValue, actionMeta) {
    if (actionMeta.action === 'select-option') {
      this.setState({
        piece: newValue,
      });
    } else if (actionMeta.action === 'create-option') {
      // open add repertoire page, with the name of the repertoire
      // already filled out from what the user has entered here
      const newRepertoireName = newValue.value;
      console.log("Add a new repertoire!: ", newRepertoireName)
      this.props.createRepertoireFromRepSelector(newRepertoireName, this.props.eventId);
    }
  }


  handleExercisesDropdownChange(name) {
    return value => {
      console.log(value);
      this.setState({
        [name]: value,
      });
    }
  }

  handlePieceInstanceSubmit(event) {
    event.preventDefault();

    const { eventId } = this.props;
    const repertoireId = this.state.piece.value;

    this.props.createRepertoireInstanceRequest(repertoireId, eventId);
    this.setState({ ...initialState });
  }

  handleExerciseInstanceSubmit(event) {
    event.preventDefault();

    const { eventId } = this.props;
    const exerciseId = this.state.exercise.value;

    this.props.createExerciseInstanceRequest(exerciseId, eventId);
    this.setState({ ...initialState });
  }

  showAddPiece() {
    this.setState({ view: VIEW.ADD_PIECE });
  }

  showAddExercise() {
    this.setState({ view: VIEW.ADD_EXERCISE });
  }

  cancelAddingItem() {
    this.setState({ ...initialState });
  }

  render() {
    const { repertoire, exercises, canAddRepertoire, canAddExercises } = this.props;
    const { exercise, view } = this.state;
    let jsx;

    switch (view) {
      case VIEW.DEFAULT:
        jsx = (
          <div>
            {canAddRepertoire && (
              <button type="button" onClick={this.showAddPiece}>
                Add piece
              </button>
            )}
            {canAddExercises && (
              <button type="button" onClick={this.showAddExercise}>
                Add exercise
              </button>
            )}
          </div>
        );
        break;
      case VIEW.ADD_PIECE:
        jsx = (
          <form onSubmit={this.handlePieceInstanceSubmit}>
            {/* NB CreatableSelect seems to manage its own state - don't need
                   to pass a value prop */}
            <CreatableSelect
              isClearable
              onChange={this.handleRepertoireDropdownChange}
              options={repertoire}
            />
            <button type="button" onClick={this.cancelAddingItem}>
              Cancel
            </button>
            <input type="submit" value="Add Piece" />
          </form>
        );
        break;
      case VIEW.ADD_EXERCISE:
        jsx = (
          <form onSubmit={this.handleExerciseInstanceSubmit}>
            <Select
              value={exercise}
              options={exercises}
              onChange={this.handleExercisesDropdownChange('exercise')}
            />
            <button type="button" onClick={this.cancelAddingItem}>
              Cancel
            </button>
            <input type="submit" value="Add Exercise" />
          </form>
        );
        break;
      default:
        break;
    }
    return jsx;
  }
}

AddRepOrExerciseInstance.defaultProps = {
  eventId: undefined,
  canAddRepertoire: true,
  canAddExercises: true,
};

AddRepOrExerciseInstance.propTypes = {
  eventId: PropTypes.number,
  repertoire: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  exercises: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  getAllRepertoireRequest: PropTypes.func.isRequired,
  getAllExercisesRequest: PropTypes.func.isRequired,
  createRepertoireInstanceRequest: PropTypes.func.isRequired,
  createExerciseInstanceRequest: PropTypes.func.isRequired,
  createRepertoireFromRepSelector: PropTypes.func.isRequired,
  canAddRepertoire: PropTypes.bool,
  canAddExercises: PropTypes.bool,
};

const mapStateToProps = state => ({
  repertoire: selectRepertoireForDropdown(state),
  exercises: selectExercisesForDropdown(state),
});

const mapDispatchToProps = {
  getAllRepertoireRequest,
  getAllExercisesRequest,
  createRepertoireInstanceRequest,
  createExerciseInstanceRequest,
  createRepertoireFromRepSelector,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddRepOrExerciseInstance);
