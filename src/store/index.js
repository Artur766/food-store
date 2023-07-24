import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mealReducer } from './cashReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  meal: mealReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [composeWithDevTools],
  devTools: process.env.NODE_ENV !== 'production',
});