import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Piece extends Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{`${this.props.composerFirstName} ${this.props.composerSurname}`}</div>
        <div>{this.props.largerWork}</div>
      </div>
    );
  }
}

Piece.defaultProps = {
  compositionDate: undefined,
  largerWork: undefined,
  characterThatSingsIt: undefined,
};

Piece.propTypes = {
  name: PropTypes.string.isRequired,
  composerFirstName: PropTypes.string.isRequired,
  composerSurname: PropTypes.string.isRequired,
  compositionDate: PropTypes.string,
  largerWork: PropTypes.string,
  characterThatSingsIt: PropTypes.string,
};

export default Piece;
