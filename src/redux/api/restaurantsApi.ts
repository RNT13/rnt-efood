import apiSlice from './apiSlice'

export const restaurantsApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getRestaurants: builder.query({
      query: () => '/restaurantes',
      providesTags: ['Restaurant']
    }),
    getRestaurantById: builder.query({
      query: id => `/restaurantes/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Restaurant', id }]
    }),
    getRestaurantsByCategory: builder.query({
      query: category => `/restaurantes?categoria=${category}`,
      providesTags: ['Restaurant']
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery, useGetRestaurantsByCategoryQuery } = restaurantsApi
