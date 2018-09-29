/* eslint-disable import/prefer-default-export */
import { createSelector } from 'redux-orm';
import orm from '../orm';
import { dbStateSelector } from './common.selectors';

export const selectRepertoireForDropdown = createSelector(
  orm,
  dbStateSelector,
  session => session.Repertoire.all().toModelArray().map(piece => ({
    value: piece.repertoire_id,
    label: `${piece.name} - ${piece.composer_id ? piece.composer_id.surname : console.log(piece, piece.composer_id)}`,
  })),
);

const getRepertoireIdFromProps = (state, props) => Number(props.repertoireId);

export const selectPiece = createSelector(
  orm,
  dbStateSelector,
  getRepertoireIdFromProps,
  (session, repertoireId) => {
    const piece = session.Repertoire.withId(repertoireId);
    if (!piece) return undefined;
    const obj = piece.ref;

    const composer = piece.composer_id.ref;
    return {
      ...obj,
      composer,
    };
  },
);
