import moment from 'moment';
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

export const selectRepFromUpcomingEvents = createSelector(
  orm,
  dbStateSelector,
  session => {
    const now = moment();
    const results = {}; // indexed by repertoire_id
    session.Events.all().toModelArray()
      .filter(event => moment(event.start).isAfter(now))
      .map(event => {
        const { start } = event;
        event.repOrExerciseInstances.all().toModelArray()
          .filter(roei => roei.repertoire_id)
          .map(repInstance => {
            const piece = repInstance.repertoire_id;
            const pieceObject = piece.ref;
            const repertoireId = piece.repertoire_id;
            if (results[repertoireId]) {
              // this piece is already in the results - should we update the
              // deadline date to sooner?
              if (moment(results[repertoireId].deadline).isAfter(start)) {
                results[repertoireId].deadline = start;
              }
            } else { // piece not in results yet
              const upcomingRepItem = {
                ...pieceObject,
                deadline: start,
              };
              results[repertoireId] = upcomingRepItem;
            }
          });
      });
    return results;
  },
);

const selectOtherRepToWorkOn = createSelector(
  orm,
  dbStateSelector,
  session => {
    const now = moment();
    return session.OtherRepToWorkOn.all()
      .filter(ortwo => moment(ortwo.deadline).isAfter(now))
      .map(ortwo => {
        const ortwoObj = ortwo.ref;
        const piece = ortwo.repertoire_id;
        const pieceObj = piece.ref;
      });
  },
);

// export const selectAllRepToWorkOn =
