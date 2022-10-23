import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kanbanApi = createApi({
  reducerPath: "kanbanApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://631ee6ab22cefb1edc3d2548.mockapi.io/" }),
  endpoints: build => ({
    getUsers: build.query({
      query: () => "users"
    })
  })
});

console.log(kanbanApi);

export const { useGetUsersQuery } = kanbanApi;
