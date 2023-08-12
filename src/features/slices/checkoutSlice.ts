import { createSlice } from '@reduxjs/toolkit'

// initial state
interface CartItem {
  id: number
  name: string
  price: number
  image: string
  description: string
  quantity: number
}

interface CheckoutState {
  items: CartItem[]
  isCheckoutOpen: boolean
}

const initialState: CheckoutState = {
  items: [],
  isCheckoutOpen: false,
}

// Action creators
export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.isCheckoutOpen = false
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity += 1
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        )
      }
    },

    clearCart: (state) => {
      state.items = []
    },

    openCheckout: (state) => {
      state.isCheckoutOpen = !state.isCheckoutOpen
    },
  },
})

// Actions
export const {
  addItem,
  removeItem,
  openCheckout,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = checkoutSlice.actions

// Selectors
export const selectItems = (state: { checkout: CheckoutState }) =>
  state.checkout.items
export const selectIsCheckoutOpen = (state: { checkout: CheckoutState }) =>
  state.checkout.isCheckoutOpen
export const selectTotal = (state: { checkout: CheckoutState }) =>
  state.checkout.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

export const selectClearCart = (state: { checkout: CheckoutState }) =>
  (state.checkout.items = [])

// Reducer
export default checkoutSlice.reducer
