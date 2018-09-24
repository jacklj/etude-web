import { createReducer } from 'redux-orm';

import orm from '../models/orm';

const reducer = createReducer(orm);

export default reducer;
