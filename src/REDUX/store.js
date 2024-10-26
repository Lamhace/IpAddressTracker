import { configureStore } from '@reduxjs/toolkit';
import IPtrackerSlice from './IPtrackerSlice';

const store = configureStore({
  reducer: {
    tracker: IPtrackerSlice
  },
});

export default store;
