import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginUser: null,
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setLoginUser(state, action) {
      state.loginUser = action.payload;
    },
    setUserLogout(state) {
      state.loginUser = null;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
