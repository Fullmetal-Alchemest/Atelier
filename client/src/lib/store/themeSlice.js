import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'darkTheme',
<<<<<<< HEAD
  initialState: { },
=======
  initialState: { isDarkTheme },
>>>>>>> main
  reducers: {
    toggle(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
