import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
// import themeSlice from './themeSlice';

const store = configureStore({
  reducer: {
    // theme: themeSlice.reducers,
=======
import themeSlice from './themeSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice.reducers,
>>>>>>> main
  },
});

export default store;
