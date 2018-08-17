import React from 'react';
import PropTypes from 'prop-types';

import { Name, Composer } from '../../common/itemCards';

const Piece = ({
  composerFirstName, composerSurname, largerWork, name,
}) => (
  <div>
    <Name>{name}</Name>
    <Composer>{`${largerWork} - ${composerFirstName} ${composerSurname}`}</Composer>
  </div>
);

Piece.defaultProps = {
  largerWork: undefined,
};

Piece.propTypes = {
  name: PropTypes.string.isRequired,
  composerFirstName: PropTypes.string.isRequired,
  composerSurname: PropTypes.string.isRequired,
  largerWork: PropTypes.string,
};

export default Piece;
