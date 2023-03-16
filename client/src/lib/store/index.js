import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice.js';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducers,
  },
});

export default store;