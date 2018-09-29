import { createReducer } from 'redux-orm';

import orm from './orm';

const reducer = createReducer(orm);

export default reducer;
