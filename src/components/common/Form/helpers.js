export const FIELD_TYPES = {
  TEXT: 'FIELD_TYPES.TEXT',
  SELECT: 'FIELD_TYPES.SELECT',
};

export const generateInitialState = fields => fields.reduce((initialState, field) => ({
  ...initialState,
  [field.name]: '',
}), {});

export const createNewEntityObject = state => {
  const newEntity = {};
  Object.keys(state).forEach(key => {
    const value = state[key];
    const resolvedValue = typeof value === 'string' ? value : value && value.value;
    newEntity[key] = resolvedValue;
  });
  return newEntity;
};
