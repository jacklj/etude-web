import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga); // then run the saga

ReactDOM.render(<App store={store} />, document.getElementById('root')); // eslint-disable-line react/jsx-filename-extension
registerServiceWorker();
