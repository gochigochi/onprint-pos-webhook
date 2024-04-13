import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Category, Product } from "../../types"

const baseUrl = import.meta.env.DEV ? "http://localhost:5173/api/" : "https://foodstationserver.diegoui.com.ar/api/"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCategories: builder.query<{ categories: Category[]}, void>({
            query: () => "categories"
        }),
        getProductsByCategory: builder.query<{products: Product[]}, string | undefined>({
            query: (id) => `products/${id}`
        }),
        getOrders: builder.query({
            query: (data) => `orders?page=${data.page}`
        }),
        getSalesReport: builder.query({
            query: (query) => `sales-reports?${query}`
        })
    })
})

export const { 
    useGetCategoriesQuery, 
    useGetProductsByCategoryQuery,
    useGetOrdersQuery, 
    useGetSalesReportQuery,
} = api