import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './Slices/User-Slice';

const store = configureStore({
  reducer: { user: UserSlice },
});

export default store;
