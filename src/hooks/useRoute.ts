import { fetchRoute } from '@/state/routes/routesSlice';
import { AppDispatch, RootState } from '@/state/store';
import { Unit } from '@/types/units';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useRoute(unit_id: Unit['unit_id'] | null) {
  const dispatch = useDispatch<AppDispatch>();
  const { routes, status, error } = useSelector(
    (state: RootState) => state.route
  );

  useEffect(() => {
    if (status === 'idle' && unit_id) {
      //   dispatch(fetchRoute(unit_id));
    }
  }, [dispatch, status, unit_id]);

  return { routes, status, error };
}
