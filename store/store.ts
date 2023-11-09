import { configureStore } from "@reduxjs/toolkit";

import forecastReducer from "./weatherSlice";
import meetingsReducer from "./meetingsSlice";

const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    meetings: meetingsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
