import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import FoodModel from '../../models/FoodModels'

type CartItem = FoodModel & { quantity: number }

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<FoodModel>) => {
      const existingItem = state.items.find(item => item.foodId === action.payload.foodId)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.foodId !== action.payload)
    },
    decrementItemQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(item => item.foodId === action.payload)

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          state.items = state.items.filter(item => item.foodId !== action.payload)
        }
      }
    }
  }
})

export const { addToCart, removeFromCart, decrementItemQuantity } = cartSlice.actions
export default cartSlice.reducer
