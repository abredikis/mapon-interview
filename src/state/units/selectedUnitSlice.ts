import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Unit } from '@/types/units';

type SliceState = {
  unit_id: Unit['unit_id'] | null;
};

const initialState: SliceState = {
  unit_id: null,
};

const selectedUnitSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    selectUnit: (
      state,
      action: PayloadAction<{
        unit_id: Unit['unit_id'];
      }>
    ) => {
      const { unit_id } = action.payload;
      state.unit_id = unit_id;
    },
  },
});

export default selectedUnitSlice.reducer;
export const { selectUnit } = selectedUnitSlice.actions;
