import { configureStore } from '@reduxjs/toolkit';
import movementSlice from 'movement/slice';

const store = configureStore({
  reducer: {
    movements: movementSlice.reducer,
  },
});

export default store;
