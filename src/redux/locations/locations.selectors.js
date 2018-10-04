/* eslint-disable import/prefer-default-export */
import { createSelector } from 'redux-orm';
import orm from '../reduxOrm/orm';
import { dbStateSelector } from '../../services/common.selectors';

export const selectLocationsForDropdown = createSelector(
  orm,
  dbStateSelector,
  session => session.Locations.all().toModelArray().map(location => ({
    value: location.location_id,
    label: location.name,
  })),
);
