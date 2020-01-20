import { createStore } from 'redux';

import rootReducers from './modules/rootReducer';

const enhancer = __DEV__ ? console.tron.createEnhancer() : null;

const store = createStore(rootReducers, enhancer);

export default store;
