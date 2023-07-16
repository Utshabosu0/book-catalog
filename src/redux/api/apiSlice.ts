/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/book`,
    }),
    allBooks: builder.query({
      query: () => `/allBook`,
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'DELETE',
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});
export const {
  useGetBooksQuery,
  useAllBooksQuery,
  useSingleBookQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = api;
