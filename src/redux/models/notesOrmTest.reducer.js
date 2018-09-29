import { createReducer } from 'redux-orm';

import orm from './orm';
// import { ACTION_TYPES } from './notes.actions';

const reducer = createReducer(orm);

export default reducer;
