import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { generalNoteCreateRequest } from '../../../redux/notes/notes.actions';

class AddGeneralNote extends Component {
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
    const { eventId } = this.props;
    const type = 'NOTE_TYPES.TECHNICAL'; // TODO 8/8/2018 all general notes technical atm
    const newNote = {
      note,
      score,
      type,
      event_id: eventId,
    };
    this.props.generalNoteCreateRequest(newNote, eventId);
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

AddGeneralNote.defaultProps = {
  eventId: undefined,
};

AddGeneralNote.propTypes = {
  isCreatingNote: PropTypes.bool.isRequired,
  eventId: PropTypes.number,
  generalNoteCreateRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isCreatingNote: state.notes.creatingNote,
});

const mapDispatchToProps = {
  generalNoteCreateRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGeneralNote);
