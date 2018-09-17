import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';

import {
  fetchAllRepertoireRequest,
  fetchAllExercisesRequest,
  createRepertoireInstanceRequest,
  createExerciseInstanceRequest,
} from '../../../redux/items/items.actions';
import {
  selectRepertoireForDropdown,
  selectExercisesForDropdown,
} from '../../../redux/items/items.selectors';

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

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };

    this.showAddPiece = this.showAddPiece.bind(this);
    this.showAddExercise = this.showAddExercise.bind(this);
    this.cancelAddingItem = this.cancelAddingItem.bind(this);
    this.handleCustomComponentChange = this.handleCustomComponentChange.bind(this);
    this.handlePieceInstanceSubmit = this.handlePieceInstanceSubmit.bind(this);
    this.handleExerciseInstanceSubmit = this.handleExerciseInstanceSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllRepertoireRequest();
    this.props.fetchAllExercisesRequest();
  }

  handleCustomComponentChange(name) {
    return value => this.setState({
      [name]: value,
    });
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
    const { repertoire, exercises } = this.props;
    const { exercise, piece, view } = this.state;
    let jsx;

    switch (view) {
      case VIEW.DEFAULT:
        jsx = (
          <div>
            <button type="button" onClick={this.showAddPiece}>
              Add piece
            </button>
            <button type="button" onClick={this.showAddExercise}>
              Add exercise
            </button>
          </div>
        );
        break;
      case VIEW.ADD_PIECE:
        jsx = (
          <form onSubmit={this.handlePieceInstanceSubmit}>
            <Select
              value={piece}
              options={repertoire}
              onChange={this.handleCustomComponentChange('piece')}
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
              onChange={this.handleCustomComponentChange('exercise')}
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

AddItem.defaultProps = {
  eventId: undefined,
};

AddItem.propTypes = {
  eventId: PropTypes.number,
  repertoire: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  exercises: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  fetchAllRepertoireRequest: PropTypes.func.isRequired,
  fetchAllExercisesRequest: PropTypes.func.isRequired,
  createRepertoireInstanceRequest: PropTypes.func.isRequired,
  createExerciseInstanceRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  repertoire: selectRepertoireForDropdown(state),
  exercises: selectExercisesForDropdown(state),
});

const mapDispatchToProps = {
  fetchAllRepertoireRequest,
  fetchAllExercisesRequest,
  createRepertoireInstanceRequest,
  createExerciseInstanceRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddItem);
