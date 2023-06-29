import { configureStore } from "@reduxjs/toolkit";

import forecastReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    forecast: forecastReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
