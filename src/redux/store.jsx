
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // autres réducteurs...
  },
});

export default store;