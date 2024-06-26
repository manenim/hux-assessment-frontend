import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_URL } from "../../lib/Constants";

type Contact = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
};

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${Backend_URL}` }),
  tagTypes: ["Contacts"],

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
      providesTags: ["Contacts"],
    }),

    addContact: builder.mutation({
      query: ({ token, newContact }) => ({
        url: "/contacts",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: newContact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    // PATCH endpoint to update an existing contact
    updateContact: builder.mutation({
      query: ({ token, contactId, updatedContact }) => ({
        url: `/contacts/${contactId}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: updatedContact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    // DELETE endpoint to remove a contact
    deleteContact: builder.mutation({
      query: ({ token, contactId }) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Contacts"],
    }),

    getContactById: builder.query({
      query: ({ token, contactId }) => ({
        url: `/contacts/${contactId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Include token for authentication
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
  useGetContactByIdQuery,
} = contactsApi;
