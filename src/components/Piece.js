import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Name, Composer} from './common/itemCards';

class Piece extends Component {
  render() {
    return (
      <Card>
        <Name>{this.props.name}</Name>
        <Composer>{`${this.props.largerWork} - ${this.props.composerFirstName} ${this.props.composerSurname}`}</Composer>
      </Card>
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
