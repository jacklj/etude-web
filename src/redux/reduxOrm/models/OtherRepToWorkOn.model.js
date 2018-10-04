import { fk, attr, Model } from 'redux-orm';

import { actionTypes as repertoireActionTypes } from '../../repertoire/repertoire.actions';
import { ifObjectExistsAndIsNotEmpty } from '../../../services/utils';

// pluralised class name so it matches table name in db
class OtherRepToWorkOn extends Model {
  static reducer(action, SessionBoundOtherRepToWorkOn) {
    switch (action.type) {
      case repertoireActionTypes.UPCOMING_REPERTOIRE.GET.SUCCESS:
        if (ifObjectExistsAndIsNotEmpty(action.payload.other_rep_to_work_on)) {
          Object.values(action.payload.other_rep_to_work_on)
            .forEach(OtherRepToWorkOnItem => SessionBoundOtherRepToWorkOn
              .upsert(OtherRepToWorkOnItem));
        }
        break;
      default:
        break;
    }
    return undefined; // Return value is ignored.
  }

  toString() {
    return `OtherRepToWorkOn: ${this.other_rep_to_work_on_id}`;
  }
}

OtherRepToWorkOn.modelName = 'OtherRepToWorkOn';

OtherRepToWorkOn.fields = {
  other_rep_to_work_on_id: attr(),
  repertoire_id: fk({ to: 'Repertoire', relatedName: 'otherRepToWorkOn' }),
  deadline: attr(),
};

OtherRepToWorkOn.options = {
  idAttribute: 'other_rep_to_work_on_id',
};

export default OtherRepToWorkOn;
