export const FIELD_TYPES = {
  TEXT: 'FIELD_TYPES.TEXT',
  SELECT: 'FIELD_TYPES.SELECT',
  DATE: 'FIELD_TYPES.DATE',
  DATETIME: 'FIELD_TYPES.DATETIME',
  SCORE: 'FIELD_TYPES.SCORE',
};

const fieldInitialValue = fieldType => {
  if (fieldType === FIELD_TYPES.TEXT) return '';
  if (fieldType === FIELD_TYPES.SCORE) return '';
  return undefined;
};

export const generateInitialState = fields => fields.reduce((initialState, field) => ({
  ...initialState,
  [field.name]: fieldInitialValue(field.type),
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
