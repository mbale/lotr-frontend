import { configureStore, combineReducers } from '@reduxjs/toolkit';
import movementSlice from 'movement/slice';

const reducer = combineReducers({
  movements: movementSlice.reducer,
});

export type RootState = ReturnType<typeof reducer>

const store = configureStore({
  reducer,
});

export default store;
