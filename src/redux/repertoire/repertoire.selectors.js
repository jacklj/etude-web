import moment from 'moment';
import { createSelector as createReduxOrmSelector } from 'redux-orm';
import { createSelector as createReselectSelector } from 'reselect';
import orm from '../reduxOrm/orm';
import { dbStateSelector } from '../../services/common.selectors';

const selectAllRepertoire = createReduxOrmSelector(
  orm,
  dbStateSelector,
  session => session.Repertoire.all().toModelArray(),
);

export const selectAllRepertoireForTable = createReselectSelector(
  selectAllRepertoire,
  allRepertoire => allRepertoire.map(piece => {
    // N.B. piece is a redux-orm Model object
    const obj = piece.ref;
    let composer = '';
    if (piece.composer_id) {
      composer = piece.composer_id.ref.surname;
    }

    // order: id, name, character, larger work, composer, type, composition date, 
    // date added, date last edited
    const result = [];
    result[0] = obj.repertoire_id;
    result[1] = obj.name;
    result[2] = obj.character_that_sings_it;
    result[3] = obj.larger_work;
    result[4] = composer;
    result[5] = obj.type;
    result[6] = obj.composition_date;
    result[7] = obj.created_at;
    result[8] = obj.updated_at;
    return result;
  }),
);

export const selectRepertoireForDropdown = createReselectSelector(
  selectAllRepertoire,
  allRepertoire => allRepertoire.map(piece => ({
    value: piece.repertoire_id.toString(), // otherwise we get select/creatable bug
    label: `${piece.name} - ${piece.composer_id ? piece.composer_id.surname : console.log(piece, piece.composer_id)}`,
  })),
);

const getRepertoireIdFromProps = (state, props) => Number(props.repertoireId);

export const selectPiece = createReduxOrmSelector(
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

const addToResultsOrUpdateExistingItem = (newRepertoireId, newDeadline, results) => {
  if (results[newRepertoireId]) {
    // this piece is already in the results - should we update the
    // deadline date to sooner?
    if (moment(results[newRepertoireId].deadline).isAfter(newDeadline)) {
      results[newRepertoireId].deadline = newDeadline; // eslint-disable-line no-param-reassign
    }
  } else { // piece not in results yet
    results[newRepertoireId] = { // eslint-disable-line no-param-reassign
      repertoire_id: newRepertoireId,
      deadline: newDeadline,
    };
  }
};

/* Just returns deadline and rep id - the UpcomingRepItem component can be
// passed the rep id, to then get the rep details itself (and it's composer
// component will in turn get the composer's details by being passed the
// composer_id).
*/
const selectRepFromUpcomingEvents = createReduxOrmSelector(
  orm,
  dbStateSelector,
  session => {
    const now = moment();
    const results = {}; // indexed by repertoire_id
    session.Events.all().toModelArray()
      .filter(event => moment(event.start).isAfter(now))
      .forEach(event => {
        const { start } = event;
        event.repOrExerciseInstances.all().toModelArray()
          .filter(roei => roei.repertoire_id)
          .forEach(repInstance => {
            const repertoireId = repInstance.ref.repertoire_id;
            addToResultsOrUpdateExistingItem(repertoireId, start, results);
          });
      });
    return results;
  },
);

const selectOtherRepToWorkOn = createReduxOrmSelector(
  orm,
  dbStateSelector,
  session => {
    const now = moment();
    const results = {}; // indexed by repertoire_id
    session.OtherRepToWorkOn.all().toRefArray()
      .filter(ortwoItem => moment(ortwoItem.deadline).isAfter(now))
      .forEach(ortwoItem => {
        const repertoireId = ortwoItem.repertoire_id;
        const { deadline } = ortwoItem;
        addToResultsOrUpdateExistingItem(repertoireId, deadline, results);
      });
    return results;
  },
);

export const selectAllRepToWorkOn = createReselectSelector(
  selectRepFromUpcomingEvents,
  selectOtherRepToWorkOn,
  (repFromUpcomingEvents, otherRepToWorkOn) => {
    const results = {
      ...repFromUpcomingEvents,
    };
    Object.values(otherRepToWorkOn).forEach(ortwoItem => {
      const repertoireId = ortwoItem.repertoire_id;
      const { deadline } = ortwoItem;
      addToResultsOrUpdateExistingItem(repertoireId, deadline, results);
    });
    return results;
  },
);
