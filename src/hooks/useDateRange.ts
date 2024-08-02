import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';

export default function useDateRange() {
  const { fromDate, tillDate } = useSelector((state: RootState) => ({
    fromDate: state.dateRange.fromDate,
    tillDate: state.dateRange.tillDate,
  }));

  return {
    fromDate,
    tillDate,
  };
}
