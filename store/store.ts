import { configureStore } from "@reduxjs/toolkit";

// Import your reducers here
import counterReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
