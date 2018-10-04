import { fk, attr, Model } from 'redux-orm';

import { actionTypes as eventsActionTypes } from '../events/events.actions';
import { actionTypes as repertoireActionTypes } from './repertoire.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../services/utils';

class Repertoire extends Model {
  static reducer(action, SessionBoundRepertoire) {
    switch (action.type) {
      case eventsActionTypes.EVENT.GET_ALL.SUCCESS:
      case eventsActionTypes.EVENT.GET.SUCCESS:
      case repertoireActionTypes.REPERTOIRE.FETCH_ALL.SUCCESS:
      case repertoireActionTypes.UPCOMING_REPERTOIRE.GET.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.repertoire)) {
          Object.values(action.payload.repertoire)
            .forEach(repertoireItem => SessionBoundRepertoire.upsert(repertoireItem));
        }
        break;
      default:
        break;
    }
    return undefined; // Return value is ignored.
  }

  toString() {
    return `Repertoire: ${this.name}`;
  }
}

Repertoire.modelName = 'Repertoire';

Repertoire.fields = {
  repertoire_id: attr(),
  name: attr(),
  composer_id: fk({ to: 'People', relatedName: 'compositions' }),
  composition_date: attr(),
  larger_work: attr(),
  character_that_sings_it: attr(),
};

Repertoire.options = {
  idAttribute: 'repertoire_id',
};

export default Repertoire;
