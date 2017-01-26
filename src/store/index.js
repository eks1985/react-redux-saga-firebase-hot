import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './create-reducer';

import mySaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


//middlewares
import thunk from 'redux-thunk';

const middlewares = [thunk, sagaMiddleware];

const initialState = {};

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(createReducer(), initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.indexes = {};

sagaMiddleware.run(mySaga);

export default store;

