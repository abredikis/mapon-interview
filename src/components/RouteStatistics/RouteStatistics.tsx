import styles from '@/components/RouteStatistics/RouteStatistics.module.scss';

export default function RouteStatistics() {
  return (
    <div className={styles.routeStatistics}>
      <div className={styles.routeStatisticsItem}>
        <strong className={styles.routeStatisticsItemValue}>0</strong>
        <p className={styles.routeStatisticsItemTitle}>Km driven</p>
      </div>
      <div className={styles.routeStatisticsItem}>
        <strong className={styles.routeStatisticsItemValue}>0h</strong>
        <p className={styles.routeStatisticsItemTitle}>Driving time</p>
      </div>
    </div>
  );
}
