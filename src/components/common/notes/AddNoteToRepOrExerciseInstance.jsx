import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createNoteAndAddToRepOrExerciseInstanceRequest } from '../../../redux/notes/notes.actions';

class AddNoteToEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      score: '',
      editingNewNote: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startEditing = this.startEditing.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { note, score } = this.state;
    const { repOrExerciseInstanceId } = this.props;
    const type = 'NOTE_TYPES.TECHNICAL'; // TODO 8/8/2018 all general notes technical atm
    const newNote = {
      note,
      score,
      type,
      rep_or_exercise_instance_id: repOrExerciseInstanceId,
    };
    this.props.createNoteAndAddToRepOrExerciseInstanceRequest(newNote, repOrExerciseInstanceId);
    this.setState({
      editingNewNote: false,
    });
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  startEditing() {
    this.setState({
      note: '',
      score: '',
      editingNewNote: true,
    });
  }

  render() {
    const { note, score, editingNewNote } = this.state;
    const { isCreatingNote } = this.props;
    let jsx;
    if (editingNewNote || isCreatingNote) {
      jsx = (
        <form onSubmit={this.handleSubmit}>
          <textarea name="note" value={note} onChange={this.handleChange} />
          <textarea name="score" value={score} onChange={this.handleChange} />
          {isCreatingNote ? <span>Saving...</span> : <input type="submit" value="Add note" />}
        </form>
      );
    } else {
      jsx = <button type="button" onClick={this.startEditing}>Add new note</button>;
    }
    return jsx;
  }
}

AddNoteToEvent.defaultProps = {
  repOrExerciseInstanceId: undefined,
};

AddNoteToEvent.propTypes = {
  isCreatingNote: PropTypes.bool.isRequired,
  repOrExerciseInstanceId: PropTypes.number,
  createNoteAndAddToRepOrExerciseInstanceRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isCreatingNote: state.flags.notes.creatingNote,
});

const mapDispatchToProps = {
  createNoteAndAddToRepOrExerciseInstanceRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteToEvent);
