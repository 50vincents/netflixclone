import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  // actions that are dispatched, affects user section of store
  // push into store
  reducers: {
   login: (state, action) => {
     state.user = action.payload;
   },
   logout: (state) => {
     state.user = null;
   }
  },
});

export const { login, logout } = userSlice.actions;

// retrieve from store

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state) => state.user.user; // go to global store, get user slice, get user

export default userSlice.reducer;
