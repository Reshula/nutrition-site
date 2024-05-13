import { configureStore } from '@reduxjs/toolkit';
import programs from './ProgramSlice';
import cart from './cartSlice'

export const store = configureStore({
    reducer: {
        programs,
        cart
    },
  })