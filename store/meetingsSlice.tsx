import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MeetingState {
  value: string;
}

const initialState: MeetingState = {
  value: "",
};

const meetingsSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {
    updateMeetings: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
  },
});

export const { updateMeetings } = meetingsSlice.actions;

export default meetingsSlice.reducer;
