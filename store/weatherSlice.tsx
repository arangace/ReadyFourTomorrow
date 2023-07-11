import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ForecastState {
  text: string;
  locationEnabled: boolean;
}

const initialState: ForecastState = {
  text: "",
  locationEnabled: false,
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    updateForecast: (state, action: PayloadAction<string>) => {
      state.text += action.payload;
    },
    updateLocation: (state, action: PayloadAction<boolean>) => {
      state.locationEnabled = action.payload;
    },
  },
});

export const { updateForecast, updateLocation } = forecastSlice.actions;

export default forecastSlice.reducer;
