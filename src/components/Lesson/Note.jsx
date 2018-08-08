import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card } from '../common/itemCards';

class Note extends Component {
  render() {
    const { note, score, type } = this.props;
    return (
      <Card>
        <div>{note}</div>
        <div>{score}</div>
        <div>{type}</div>
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
