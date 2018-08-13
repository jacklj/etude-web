export const ACTION_TYPES = {
  STORE_ALL_EVENTS: 'ACTION_TYPES.STORE_ALL_EVENTS',
};

export const storeAllEvents = events => ({
  type: ACTION_TYPES.STORE_ALL_EVENTS,
  events,
});
