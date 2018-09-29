/* eslint-disable import/prefer-default-export */
import { createSelector } from 'redux-orm';
import orm from '../orm';
import { dbStateSelector } from './common.selectors';

export const selectRepertoireForDropdown = createSelector(
  orm,
  dbStateSelector,
  session => session.Repertoire.all().toModelArray().map(piece => ({
    value: piece.repertoire_id,
    label: `${piece.name} - ${piece.composer_id.surname}`,
  })),
);
