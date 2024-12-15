import { Suspense } from 'react';
import MapPage from './components/map-page';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MapPage />
    </Suspense>
  );
}
