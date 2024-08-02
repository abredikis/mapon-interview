import { useDispatch } from 'react-redux';
import RouteUnitSelector from '../RouteUnitSelector/RouteUnitSelector';
import styles from './RouteReportControls.module.scss';
import { setFromDate, setTillDate } from '@/state/dateRange/dateRangeSlice';
import formatDate from '@/utils/formatDate';

export default function RouteReportControls() {
  const dispatch = useDispatch();
  return (
    <div className={styles.routeReportControls}>
      <div className={styles.routeReportUnitSelector}>
        <p>
          Vehicle number <legend>*</legend>
        </p>
        <div className={styles.routeReportDropdown}>
          <RouteUnitSelector />
        </div>
      </div>
      <div className={styles.routeReportPeriodSelector}>
        <p>Period</p>
        <div>
          <div>
            <p>From:</p>
            <input
              type='date'
              onChange={(e) => {
                dispatch(setFromDate(formatDate(e.target.value)));
              }}
            />
          </div>
          <div>
            <p>To:</p>
            <input
              type='date'
              onChange={(e) => {
                dispatch(setTillDate(formatDate(e.target.value)));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
