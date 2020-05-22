import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { StepsOutcome } from 'shared/dto';

/*
** State
*/

export type InitialState = {
  steps: string;
  outcome: StepsOutcome
}

const initialState: InitialState = {
  steps: null,
  outcome: null,
};

/*
** Reducers / Actions
*/

const setStep
: CaseReducer<InitialState, PayloadAction<{ steps: string }>> = (state, action) => {
  const { steps } = action.payload;

  state.steps = steps;
};

const setOutcome
: CaseReducer<InitialState, PayloadAction<{ outcome: StepsOutcome }>> = (state, action) => {
  const { outcome } = action.payload;

  state.outcome = outcome;
};

const movementSlice = createSlice({
  name: 'movement',
  initialState,
  reducers: {
    setStep,
    setOutcome,
  },
});

export default movementSlice;
