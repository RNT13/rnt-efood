import { combineReducers, configureStore as toolkitConfigureStore } from '@reduxjs/toolkit'
import apiSlice from './api/apiSlice'
import cartSlice from './slices/cartSlice'

const rootReducer = combineReducers({
  cart: cartSlice,
  [apiSlice.reducerPath]: apiSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = toolkitConfigureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type AppDispatch = typeof store.dispatch
