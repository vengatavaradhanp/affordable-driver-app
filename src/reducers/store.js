import { configureStore } from '@reduxjs/toolkit';
import slotBookingReducer from '../features/slotBookingSlice';

export const store = configureStore({
  reducer: {
    slots: slotBookingReducer,
  },
});
