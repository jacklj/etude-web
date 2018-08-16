/* eslint-disable  import/prefer-default-export */
export const getSelectOption = (objectFromServer, selectOptions) => selectOptions.filter(
  option => option.value === objectFromServer.id,
)[0];
