export const getSelectOption = (objectFromServer, selectOptions) => selectOptions.filter(
  option => option.value === objectFromServer.id,
)[0];

export const ifObjectExistsAndIsNotEmpty = o => o && Object.values(o).length > 0;
