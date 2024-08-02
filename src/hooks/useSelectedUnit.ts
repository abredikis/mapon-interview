import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';

export default function useSelectedUnit() {
  const selectedUnitId = useSelector(
    (state: RootState) => state.selectedUnit.unit_id
  );

  return selectedUnitId;
}
