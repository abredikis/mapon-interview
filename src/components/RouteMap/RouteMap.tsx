import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import styles from './RouteMap.module.scss';
import { Route } from '@/types/route';
import useRoute from '@/hooks/useRoute';

export default function RouteMap() {
  // const { routes } = useRoute(null);

  return (
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
      <Map
        className={styles.map}
        defaultCenter={{ lat: 56.947407778, lng: 24.106875278 }}
        defaultZoom={8}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        scrollwheel={false}
      />
    </APIProvider>
  );
}
