import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card } from '../common/itemCards';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };

    this.editNote = this.editNote.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }

  editNote() {
    this.setState({ editing: true });
  }

  saveNote() {
    this.setState({ editing: false });
  }

  render() {
    const { note, score, type } = this.props;
    const { editing } = this.state;
    return (
      <Card>
        {editing ? (
          <div>
            <div>editing</div>
            <button type="submit" onClick={this.saveNote}>Save</button>
          </div>
        ) : (
          <div>
            <div>{note}</div>
            <div>{score}</div>
            <div>{type}</div>
            <button type="button" onClick={this.editNote}>Edit</button>
          </div>
        )
        }
      </Card>
    );
  }
}

Note.defaultProps = {
  note: '',
  score: '',
  type: '',
};

Note.propTypes = {
  note: PropTypes.string,
  score: PropTypes.string,
  type: PropTypes.string,
};

export default Note;
