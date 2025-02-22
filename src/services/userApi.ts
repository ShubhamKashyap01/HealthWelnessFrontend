import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://healthcare-wellness.onrender.com/api/" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "profile",
    }),
    updateUser: builder.mutation({
      query: (userData) => ({
        url: "profile",
        method: "PUT",
        body: userData,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
