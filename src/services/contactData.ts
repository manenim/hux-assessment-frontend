import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Backend_URL } from '../../lib/Constants';

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${Backend_URL}` }),
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: (token) => ({
        url: "/contacts", 
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});


export const { useGetAllContactsQuery } = contactsApi;