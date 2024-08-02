import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Unit } from '@/types/units';
import type { Route } from '@/types/route';
import axiosClient from '@/utils/axios';

type SliceState = {
  routes: Route[];
  status: 'succeeded' | 'loading' | 'idle' | 'failed';
  error: string | null;
};

const initialState: SliceState = {
  routes: [],
  status: 'idle',
  error: null,
};

type fetchRouteProps = {
  unit_id: Unit['unit_id'];
  from: string | null;
  till: string | null;
};

export const fetchRoute = createAsyncThunk(
  'units/fetchRoute',
  async ({ unit_id, from, till }: fetchRouteProps) => {
    const response = await axiosClient.get('/route/list.json', {
      params: {
        unit_id,
        from: '2024-02-23T12:17:21Z',
        till: '2024-02-30T12:17:21Z',
      },
    });
    console.log(response.data);
    return response.data.data.units;
  }
);

const routeSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoute.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRoute.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.routes = action.payload;
      })
      .addCase(fetchRoute.rejected, (state, action) => {
        state.status = 'failed';

        if (typeof action.error.message !== 'undefined') {
          state.error = action.error.message;
        }
      });
  },
});

export default routeSlice.reducer;
