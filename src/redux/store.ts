import { combineReducers, configureStore as toolkitConfigureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'

const rootReducer = combineReducers({
  cart: cartSlice
})

export type RootState = ReturnType<typeof rootReducer>

export function configureStore(preloadedState?: Partial<RootState>) {
  return toolkitConfigureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export const store = configureStore()

export type AppStore = ReturnType<typeof configureStore>
export type RootReducer = typeof rootReducer
