import { configureStore } from '@reduxjs/toolkit';
import slotBookingReducer from '../features/slotBookingSlice';
import slotSliceReducer from '../features/slotSlice';

export const store = configureStore({
  reducer: {
    slots: slotBookingReducer,
    slotsAdd: slotSliceReducer,
  },
});
