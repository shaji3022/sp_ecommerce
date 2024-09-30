import { createSlice } from '@reduxjs/toolkit';

// Initial state should be declared before
const initialState = {
  cartItems: [],
  disabledProducts: [], // Add this to the global state
};

const CartSlice = createSlice({
  name: 'cart',
  initialState, // Use the initial state here
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.disabledProducts.push(action.payload.id); // Disable the product
    },
    removeItemFromCart(state, action) {
      // Filter out the item with matching id from the cart
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      // Clear the cart by setting it to an empty array
      state.cartItems = [];
      state.disabledProducts = []; // Reset disabled products
    },
    increaseItemQuantity(state, action) {
      const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    decreaseItemQuantity(state, action) {
      const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
    disableProduct(state, action) {
        state.disabledProducts.push(action.payload);
      },
      enableProduct(state, action) {
        state.disabledProducts = state.disabledProducts.filter(id => id !== action.payload);
      },
      
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  disableProduct, 
  enableProduct,
} = CartSlice.actions;

export default CartSlice.reducer;
