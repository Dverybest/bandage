// Or from '@reduxjs/toolkit/query/react'
import { objectToQueryString } from "@/utils/objectToQueryString";
import { baseApi } from ".";
import { TagType } from "./tags";

const shopApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      IGetProductListResponse,
      Record<string, string | number> | void
    >({
      query: (params) => ({
        url: `/products?${objectToQueryString(params ?? {})}`,
        method: "GET",
      }),
      providesTags: (_, __, params) => [{ type: TagType.Products, params }],
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: (_, __, id) => [{ type: TagType.Products, id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = shopApi;
