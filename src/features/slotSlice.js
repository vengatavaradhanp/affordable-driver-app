import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const slotSlice = createSlice({
  name: "slots",
  initialState,
  reducers: {
    addSlots: (state, action) => {
      // const newSlots = action.payload;
      state.data = action.payload;
      // newSlots.forEach((item) => {
      //   if (item.active) {
      //     const exists = state.slots.some(
      //       (slot) => slot.id === item.id && slot.date === item.date
      //     );
      //     if (!exists) {
      //       state.slots.push({ id: item.id, date: item.date });
      //     }
      //   }
      // });
    },
  },
});

export const { addSlots } = slotSlice.actions;
export default slotSlice.reducer;
