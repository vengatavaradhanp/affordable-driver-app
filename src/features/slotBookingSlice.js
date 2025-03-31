import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const slotBookingSlice = createSlice({
  name: 'slotBooking',
  initialState,
  reducers: {
    slotBooking: (state, action) => {
      state.data.push(...action.payload);
    }
  },
});

export const { slotBooking } = slotBookingSlice.actions;
export default slotBookingSlice.reducer;
