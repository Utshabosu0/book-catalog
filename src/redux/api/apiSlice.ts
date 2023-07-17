/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
  tagTypes: ['books'],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/book`,
      providesTags: ['books'],
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
      providesTags: ['books'],
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/updateBook/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
  usePostBookMutation,
} = api;
