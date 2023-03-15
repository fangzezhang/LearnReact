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
          console.info(id);
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

console.info(rtkSlice);

export const { useGetUserQuery, usePostUserMutation } = rtkSlice;
