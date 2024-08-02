import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SliceState = {
  fromDate: string | null;
  tillDate: string | null;
};

const initialState: SliceState = {
  fromDate: null,
  tillDate: null,
};

const dateRangeSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    setFromDate: (state, action: PayloadAction<string | null>) => {
      state.fromDate = action.payload;
    },
    setTillDate: (state, action: PayloadAction<string | null>) => {
      state.tillDate = action.payload;
    },
  },
});

export default dateRangeSlice.reducer;
export const { setFromDate, setTillDate } = dateRangeSlice.actions;
