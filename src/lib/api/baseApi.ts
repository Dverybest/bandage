import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "./tags";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({}),
  tagTypes: tagTypes,
  endpoints: () => ({}),
});
