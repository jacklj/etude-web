import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Name, Composer } from '../styledComponents';
import { selectPiece } from '../../../redux/reduxOrm/selectors/repertoire.selectors';

const Piece = ({
  piece,
}) => {
  if (!piece) return null;
  const {
    larger_work: largerWork,
    name,
    composer,
  } = piece;
  const { first_name: firstName, surname } = composer;
  return (
    <div>
      <Name>{name}</Name>
      {composer && <Composer>{`${largerWork} - ${firstName} ${surname}`}</Composer>}
    </div>
  );
};

Piece.defaultProps = {
  piece: undefined,
};

Piece.propTypes = {
  piece: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = (state, ownProps) => ({
  piece: selectPiece(state, ownProps),
});

export default connect(mapStateToProps)(Piece);
