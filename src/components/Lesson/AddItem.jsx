import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';

import { fetchAllRepertoireRequest, fetchAllExercisesRequest } from '../../redux/items/items.actions';
import { selectRepertoireForDropdown, selectExercisesForDropdown } from '../../redux/items/items.selectors';

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
            <button type="button" onClick={this.showAddPiece}>Add piece</button>
            <button type="button" onClick={this.showAddExercise}>Add exercise</button>
          </div>
        );
        break;
      case VIEW.ADD_PIECE:
        jsx = (
          <form>
            <Select value={piece} options={repertoire} onChange={this.handleCustomComponentChange('piece')} />
            <button type="button" onClick={this.cancelAddingItem}>Cancel</button>
            <button type="button" onClick={this.addPiece}>
              Add Piece
            </button>
          </form>
        );
        break;
      case VIEW.ADD_EXERCISE:
        jsx = (
          <form>
            <Select value={exercise} options={exercises} onChange={this.handleCustomComponentChange('exercise')} />
            <button type="button" onClick={this.cancelAddingItem}>Cancel</button>
            <button type="button" onClick={this.addExercise}>
              Add Piece
            </button>
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
};

const mapStateToProps = state => ({
  repertoire: selectRepertoireForDropdown(state),
  exercises: selectExercisesForDropdown(state),
});

const mapDispatchToProps = {
  fetchAllRepertoireRequest,
  fetchAllExercisesRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
