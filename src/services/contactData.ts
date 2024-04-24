import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Backend_URL } from '../../lib/Constants';

type Contact = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
}

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
    }),
    // PUT endpoint to update an existing contact
    updateContact: builder.mutation({
      query: ({ token, contactId, updatedContact }) => ({
        url: `/contacts/${contactId}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: updatedContact,
      }),
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
    }),

    getOneContact: builder.mutation<Contact, { id: string; token: string }>({
      query: ({ id, token }) => ({
        url: `/contacts/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
      transformResponse: (response: { data: Contact }) => response.data,
    }),
  }),
});


export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
  useGetOneContactMutation,
} = contactsApi;