import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getServerSession } from "next-auth";
import { Backend_URL } from "../../lib/Constants";


export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${Backend_URL}users` }),
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


export const { useSignupMutation } = usersApi;
