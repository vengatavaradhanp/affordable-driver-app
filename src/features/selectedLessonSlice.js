import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const selectedLessonSlice = createSlice({
    name: "selectedLesson",
    initialState,
    reducers: {
        selectedLesson: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { selectedLesson } = selectedLessonSlice.actions;
export default selectedLessonSlice.reducer;
