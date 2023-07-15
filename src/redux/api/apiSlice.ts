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
  }),
});
export const { useGetBooksQuery, useAllBooksQuery } = api;
