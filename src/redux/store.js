import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { todosReducer } from './todos';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware().concat(logger);

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
