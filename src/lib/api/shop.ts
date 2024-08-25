// Or from '@reduxjs/toolkit/query/react'
import { BASE_URL } from "@/config";
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
        url: `${BASE_URL}/products?${objectToQueryString(params ?? {})}`,
        method: "GET",
      }),
      providesTags: (_, __, params) => [{ type: TagType.Products, params }],
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => ({
        url: `${BASE_URL}/products/${id}`,
        method: "GET",
      }),
      providesTags: (_, __, id) => [{ type: TagType.Products, id }],
    }),
    checkout: builder.mutation<
      {
        data: { id: string; paymentUrl: string };
        message: string;
        status: number;
      },
      { amount: number }
    >({
      query: (payload) => ({
        url: "/cart/api",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCheckoutMutation,
} = shopApi;
