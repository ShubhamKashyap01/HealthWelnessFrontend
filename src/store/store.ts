import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { authService } from "@/services/authService";
import { userApi } from "@/services/userApi";
// import goalsReducer from "../features/goalsSlice";
// import providersReducer from "../features/providersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authService.reducerPath]: authService.reducer, 
    [userApi.reducerPath]: userApi.reducer,
    // goals: goalsReducer,
    // providers: providersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authService.middleware, userApi.middleware), // Add middleware

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
