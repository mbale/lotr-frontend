import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';

/*
** State
*/

type InitialState = {
  steps: string
}

const initialState: InitialState = {
  steps: null,
};

/*
** Reducers / Actions
*/

const setStep
: CaseReducer<InitialState, PayloadAction<{ steps: string }>> = (state, action) => {
  const { steps } = action.payload;

  state.steps = steps;
};

const movementSlice = createSlice({
  name: 'movement',
  initialState,
  reducers: {
    setStep,
  },
});

export default movementSlice;
