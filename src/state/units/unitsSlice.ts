import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { type Unit } from '@/types/units';
import axiosClient from '@/utils/axios';

type SliceState = {
  units: Unit[];
  status: 'succeeded' | 'loading' | 'idle' | 'failed';
  error: string | null;
};

const initialState: SliceState = {
  units: [],
  status: 'idle',
  error: null,
};

export const fetchUnits = createAsyncThunk('units/fetchUnits', async () => {
  const response = await axiosClient.get('/unit/list.json');
  return response.data.data.units;
});

const unitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUnits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUnits.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.units = action.payload;
      })
      .addCase(fetchUnits.rejected, (state, action) => {
        state.status = 'failed';

        if (typeof action.error.message !== 'undefined') {
          state.error = action.error.message;
        }
      });
  },
});

export default unitsSlice.reducer;
