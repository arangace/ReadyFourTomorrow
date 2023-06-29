import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ForecastState {
  value: string;
}

const initialState: ForecastState = {
  value: "",
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    updateForecast: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
  },
});

export const { updateForecast } = forecastSlice.actions;

export default forecastSlice.reducer;
