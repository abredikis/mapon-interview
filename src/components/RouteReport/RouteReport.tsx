import RouteMap from '../RouteMap/RouteMap';
import styles from '@/components/RouteReport/RouteReport.module.scss';
import RouteStatistics from '../RouteStatistics/RouteStatistics';
import Button from '../ui/Button/Button';
import RouteReportControls from '../RouteReportControls/RouteReportControls';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/state/store';
import useSelectedUnit from '@/hooks/useSelectedUnit';
import { fetchRoute } from '@/state/routes/routesSlice';
import useDateRange from '@/hooks/useDateRange';

export default function RouteReport() {
  const selectedUnitId = useSelectedUnit();
  const { fromDate, tillDate } = useDateRange();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.routeReport}>
      <div className={styles.routeReportHeader}>
        <h1 className={styles.routeReportTitle}>Route report</h1>
      </div>
      <div className={styles.routeReportControls}>
        <RouteReportControls />
      </div>
      <div className={styles.routeReportMap}>
        <RouteMap />
      </div>
      <div className={styles.routeReportDetails}>
        <RouteStatistics />
      </div>
      <div className={styles.routeReportFooter}>
        <Button
          onClick={(e) => {
            e.preventDefault();

            if (selectedUnitId) {
              dispatch(
                fetchRoute({
                  unit_id: selectedUnitId,
                  from: fromDate,
                  till: tillDate,
                })
              );
            }
          }}
        >
          Generate
        </Button>
      </div>
    </div>
  );
}
