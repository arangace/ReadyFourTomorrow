import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TTSSlice {
  isSpeaking: boolean;
}

const initialState: TTSSlice = {
  isSpeaking: false,
};

const ttsSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {
    setIsSpeaking: (state, action: PayloadAction<boolean>) => {
      state.isSpeaking = action.payload;
    },
  },
});

export const { setIsSpeaking } = ttsSlice.actions;

export default ttsSlice.reducer;
