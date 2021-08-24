import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store'

export interface CartState {
  items: CartItem[];
}

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export interface Item {
  name: string;

}

const initialState: CartState = {
  items: [],
}

//This File contains the reducers for my shopping cart

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      // If Item is already added increment instead
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].name === action.payload.name) {
          state.items[i].quantity += 1;
          return;
        }
      }
      
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      // Search for item before removing it
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].name === action.payload) {
          state.items.splice(i, 1);
        }
      }
    },
    increment: (state, action: PayloadAction<string>) => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].name === action.payload) {
          state.items[i].quantity += 1;
        }
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].name === action.payload) {
          if(state.items[i].quantity > 1) {
            state.items[i].quantity -= 1;
          }
        }
      }
    },
  }
});

export const { addItem, removeItem, increment, decrement } = cartSlice.actions;

export const selectItems = (state: RootState) => state.items;

export default cartSlice.reducer;
