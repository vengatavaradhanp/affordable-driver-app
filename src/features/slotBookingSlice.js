import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slots: [],
};

const slotBookingSlice = createSlice({
  name: 'slotBooking',
  initialState,
  reducers: {
    setSelectedSlots: (state, action) => {
      state.slots = action.payload;
    }
  },
});

export const { setSelectedSlots } = slotBookingSlice.actions;
export default slotBookingSlice.reducer;
