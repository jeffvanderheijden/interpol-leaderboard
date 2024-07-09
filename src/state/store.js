import { configureStore, combineReducers } from '@reduxjs/toolkit';

import uiReducer from './ui';

const rootReducer = combineReducers({
  ui: uiReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
