import { configureStore } from '@reduxjs/toolkit';
// import themeSlice from './themeSlice';

const store = configureStore({
  reducer: {
    // theme: themeSlice.reducers,
  },
});

export default store;
