import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  // how will be naming
  reducerPath: "contactApi",
  // it baseUrl with which we will work.
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61f83b45783c1d0017c44652.mockapi.io/",
  }),
  //   "builder" it function which creates function "getPokemonByName"
  endpoints: (builder) => ({
    fetchContact: builder.query({
      query: () => `/contacts`,
      providesTags: ["contacts"],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return { url: `/contacts/${id}`, method: "DELETE" };
      },
      invalidatesTags: ["contacts"],
    }),
    addContact: builder.mutation({
      query(newContact) {
        const { name, number } = newContact;
        return {
          url: "/contacts",
          method: "POST",
          body: {
            name,
            number,
          },
        };
      },
      invalidatesTags: ["contacts"],
    }),
  }),
});

// it function which will be called function "getPokemonByName", with needing "query"
export const {
  useFetchContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi;
