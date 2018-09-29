const getSelectOption = idKey => (objectFromServer, selectOptions) => selectOptions.filter(
  option => option.value === objectFromServer[idKey],
)[0];

export const getLocationSelectOption = getSelectOption('location_id');

export const getPersonSelectOption = getSelectOption('person_id');

export const ifObjectExistsAndIsNotEmpty = o => o && Object.values(o).length > 0;
