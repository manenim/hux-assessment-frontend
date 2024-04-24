import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getServerSession } from "next-auth";

// import type { Pokemon } from './types



// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/users/" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (newUser) => ({
        url: "register",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newUser
      })
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupMutation } = usersApi;
