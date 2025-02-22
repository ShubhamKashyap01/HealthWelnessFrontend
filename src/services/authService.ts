import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://healthcare-wellness.onrender.com/api/";

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<{ id: string; name: string; email: string; token: string }, { name: string; email: string; password: string }>({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation<{ id: string; name: string; email: string; token: string }, { email: string; password: string }>({
      query: (userData) => ({
        url: "auth/login",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authService;
