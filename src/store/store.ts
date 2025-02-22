import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
// import goalsReducer from "../features/goalsSlice";
// import providersReducer from "../features/providersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // goals: goalsReducer,
    // providers: providersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
