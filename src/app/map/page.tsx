"use client"
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import styles from "./page.module.css"
import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { StarIcon, CoffeeIcon } from '../ui';

const mapOptions = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
  center: { lat: -30.035064, lng: -51.212627 },
  zoom: 16,
  disableDefaultUI: true,
}

const placeInfo = [{
  createdAt: "2024-01-13T15:56:56.376Z",
  name:'THE COFFEE',
  image: "https://loremflickr.com/640/480/business",
  description: "secondary",
  address: 'Rua Fernandes Vieira, 656 - Bom Fim',
  phone: "1-392-289-9430",
  latitude: "-30.035212829644085",
  longitude: "-51.210918285789916",
  rating: 4.4,
  slug: "the-coffee",
  id: "1"
},
{
  createdAt: "2024-01-13T15:56:56.376Z",
  name:'ESPAÇO BRASCO',
  image: "https://loremflickr.com/640/480/business",
  description: "secondary",
  address: 'Rua Fernandes Vieira, 286 - Bom Fim',
  phone: "1-392-289-9430",
  latitude: "-30.03193402658714",
  longitude: "-51.21070994496208",
  rating: 4.7,
  slug: "brasco-cafe",
  id: "2"
}]
type HoveredMarkerProps = string | null;


export default function Page() {
  const [hoveredMarker, setHoveredMarker] = useState<HoveredMarkerProps>(null)
/** This function was created because in some cases the browser does not 
 * recognize the div element which contains the advanced marker. This makes
 * that the onMouseEnter and onMouseLeave events are not triggered, and 
 * the hovered stated is not changed.
 * In case this happens, when clicking the marker the hovered state will be
 * changed.
*/
  function handleMarkerClick(slug: string){
    if(slug === hoveredMarker){
      return setHoveredMarker(null)
    } else {
      return setHoveredMarker(slug)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Encontre sua próxima experiência</h2>
      <APIProvider apiKey={mapOptions.apiKey}>
        <div className={styles.map}>
          <Map
            zoom={15}
            className={styles.map}
            center={mapOptions.center}
            disableDefaultUI={mapOptions.disableDefaultUI}
            mapId={mapOptions.mapId}
          >
            {placeInfo.map(place => {
              return(
                <div key={place.id}
                  onMouseEnter={() => setHoveredMarker(place.slug)}
                  onMouseLeave={() => setHoveredMarker(null)}
                >
                <AdvancedMarker key={place.id} className={styles.marker} position={{lat: parseFloat(place.latitude), lng: parseFloat(place.longitude)}} 
                onClick={() => handleMarkerClick(place.slug)}
                > 
                    <CoffeeIcon />
                    {hoveredMarker === place.slug ? (
                      <>
                        <div className={styles['marker-info']}>
                          <p>{place.name}</p>
                          <p>{place.address}</p>
                        </div>
                        <div className={styles['marker-rating']}>
                          <p>{place.rating}</p>
                          <StarIcon />
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </AdvancedMarker>
                </div>
              )
            })}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
}
