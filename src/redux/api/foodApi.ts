/* eslint-disable prettier/prettier */
import { FoodType } from '../../types/foodType';
import apiSlice from './apiSlice';

export const foodApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getFoodByRestaurant: builder.query<FoodType[], string>({
      query: restaurantId => `/restaurants/${restaurantId}/cardapio`,
      providesTags: (_result, _error, restaurantId) => [{ type: 'Food', id: restaurantId }]
    }),
    getFoodType: builder.query<FoodType, { restaurantId: string; itemId: string }>({
      query: ({ restaurantId, itemId }) => `/restaurants/${restaurantId}/cardapio/${itemId}`,
      providesTags: (_result, _error, { restaurantId }) => [{ type: 'Food', id: restaurantId }]
    })
  })
})

export const { useGetFoodByRestaurantQuery, useGetFoodTypeQuery } = foodApi
