import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/rtk' }),
  tagTypes: ['Post', 'User'],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => {
    return {
      getUser: builder.query({
        query: (id) => {
          return `/auth/${id}`;
        },
        providesTags: ['Post'],
      }),
      postUser: builder.mutation({
        query: (params) => {
          return {
            url: '/postUser',
            method: 'POST',
            body: params,
          }
        },
        invalidatesTags: ['Post'],
      })
    };
  },
});

export const { useGetUserQuery, usePostUserMutation } = rtkSlice;
