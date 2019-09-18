import { createStore, applyMiddleware } from 'redux';

import middlewares from './middleware';
import appReducer from '../_reducers';

const store = createStore(appReducer, {}, applyMiddleware(...middlewares))

export { store };
