/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectLocations = state => state.locations.locations;

export const selectLocationsForDropdown = createSelector(
  selectLocations,
  locations => locations.map(location => ({
    value: location.id,
    label: location.name,
  })),
);
