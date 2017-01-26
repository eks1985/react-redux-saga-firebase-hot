import { applyMiddleware, createStore } from 'redux';
import createReducer from './create-reducer';
//middlewares
import thunk from 'redux-thunk';

const middlewares = [thunk];

const initialState = {};

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(createReducer(), initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.indexes = {};
export default store;

