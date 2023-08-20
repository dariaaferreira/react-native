import { configureStore } from '@reduxjs/toolkit';
import { userReducer, postReducer } from './slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  },
});

export default store;