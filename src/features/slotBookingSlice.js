import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slots: [],
};

const slotBookingSlice = createSlice({
  name: 'slotBooking',
  initialState,
  reducers: {
    setSelectedSlots: (state, action) => {
      console.log('action   => ',state.slots)
      console.log('state   => ',state)
      state.slots.push(action.payload);
      // console.log('pushed items : ',state.slots.action)
    }
  },
});

export const { setSelectedSlots } = slotBookingSlice.actions;
export default slotBookingSlice.reducer;
