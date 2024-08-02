import styles from '@/components/RouteUnitSelector/RouteUnitSelector.module.scss';
import useSelectedUnit from '@/hooks/useSelectedUnit';
import useUnits from '@/hooks/useUnits';
import { selectUnit } from '@/state/units/selectedUnitSlice';
import { useDispatch } from 'react-redux';

export default function RouteUnitSelector() {
  const { units, status, error } = useUnits();
  const dispatch = useDispatch();
  const selectedUnitId = useSelectedUnit();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof e.target.value === 'string') {
      const selectedUnitId = e.target.value;
      dispatch(selectUnit({ unit_id: Number(selectedUnitId) }));
    }
  };

  return (
    <div className={styles.routeUnitSelector}>
      <select value={selectedUnitId ?? 0} onChange={handleChange}>
        <option value='0' disabled selected>
          Select a unit
        </option>
        {units.length > 0 ? (
          units.map((unit) => (
            <option key={unit.unit_id} value={unit.unit_id}>
              {unit.number}
            </option>
          ))
        ) : (
          <option value={0} disabled>
            No units found
          </option>
        )}
      </select>
    </div>
  );
}
