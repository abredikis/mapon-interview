import { AppDispatch, RootState } from '@/state/store';
import { fetchUnits } from '@/state/units/unitsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useUnits() {
  const dispatch = useDispatch<AppDispatch>();
  const { units, status, error } = useSelector(
    (state: RootState) => state.units
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUnits());
    }
  }, [dispatch, status]);

  return { units, status, error };
}
