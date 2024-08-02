import { configureStore } from '@reduxjs/toolkit';
import unitsSlice from './units/unitsSlice';
import selectedUnitSlice from './units/selectedUnitSlice';
import dateRangeSlice from './dateRange/dateRangeSlice';
import routeSlice from './routes/routesSlice';

export const store = configureStore({
  reducer: {
    units: unitsSlice,
    selectedUnit: selectedUnitSlice,
    route: routeSlice,
    dateRange: dateRangeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
