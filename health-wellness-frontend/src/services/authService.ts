import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://your-api.com/api/auth"; // Replace with actual API URL

export const authService = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<{ id: string; name: string; email: string; token: string }, { name: string; email: string; password: string }>({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation<{ id: string; name: string; email: string; token: string }, { email: string; password: string }>({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authService;
