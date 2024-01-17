/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import styles from "./page.module.css"
// import clsx from 'clsx';

import { ReactNode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Wrapper } from '@googlemaps/react-wrapper'
import { CoffeeIcon } from "../ui/coffee-icon"
import { StarIcon } from "../ui/star-icon"

const mapOptions = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
  center: { lat: -30.035064, lng: -51.212627 },
  zoom: 16,
  disableDefaultUI: true,
}
const coffeeInfo = [{
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

type SelectedCoffeeType =
  | {
      name: string
      address: string
      rating: number
      slug: string
      latitude: number
      longitude: number
    }
  | undefined
type MapType = google.maps.Map | undefined;
type RefType = HTMLDivElement | null;
type HoveredMarkerProps = string | null;
type PositionProps = {
    lat: number
    lng: number
  }
type MapProps = {
    zoom: number;
    center: PositionProps;
  };
type ChildrenProps = React.ReactNode;
type OnClickProps = (event: React.MouseEvent) => void;
type MarkerProps = {
    map: MapProps
    children: ChildrenProps
    position: PositionProps
    onClick?: OnClickProps
  }
type RootRefType = {
    render: (children: ReactNode) => void;
    unmount: (children: ReactNode) => void;
  } |null

export default function Maps() {
  return (
    <div className={styles.container}>
      <h2>Encontre sua próxima experiência</h2>
      <div className={styles.map}>
        <Wrapper
          apiKey={mapOptions.apiKey}
          version="beta"
          libraries={['marker']}
        >
          <CoffeeMap />
        </Wrapper>
      </div>
    </div>
  )
}

function CoffeeMap() {
  const [map, setMap] = useState<MapType>();
  const ref = useRef<RefType>(null);

  useEffect(() => {
    if (ref.current){
      setMap(new window.google.maps.Map(ref.current, mapOptions))
    }
  }, [])

  return (
    <>
      <div ref={ref} className={styles.map} style={{height: '500px'}}/>
      {map && <Coffees map={map} />}
    </>
  )
}

function Coffees({ map }: any) {
  const [selectedCoffee, setSelectedCoffee] =
    useState<SelectedCoffeeType>(undefined)
  const [hoveredMarker, setHoveredMarker] = useState<HoveredMarkerProps>(null)

  return (
    <>
      {Object.entries(coffeeInfo).map(([key, coffee]) => (
        <Marker
          map={map}
          key={key}
          position={{lat: parseFloat(coffee.latitude), lng: parseFloat(coffee.longitude)}}
          onClick={() => {console.log("Clicked")}}
        >
          <div
            className={styles.marker}
            onMouseEnter={() => setHoveredMarker(coffee.slug)}
            onMouseLeave={() => setHoveredMarker(null)}
          >
            <CoffeeIcon />
            {hoveredMarker === coffee.slug ? (
              <>
                <div className={styles['marker-info']}>
                  <p>{coffee.name}</p>
                  <p>{coffee.address}</p>
                </div>
                <div className={styles['marker-rating']}>
                  <p>{coffee.rating}</p>
                  <StarIcon />
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        </Marker>
      ))}
    </>
  )
}

function Marker({ map, position, children, onClick }: MarkerProps) {
  const rootRef = useRef<RootRefType>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | undefined>();

  useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement('div')
      rootRef.current = createRoot(container)

      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        position,
        content: container,
      })
    }

    return () => {
      if(markerRef.current){
        markerRef.current.map = null
      }
    }
  }, [])

  useEffect(() => {
    if(rootRef.current){
      rootRef.current.render(children)
    }
    if(markerRef.current){
      markerRef.current.position = position
      markerRef.current.map = map
      const listener = markerRef.current.addListener('click', onClick)
      return () => listener.remove()
    }
  }, [map, position, children, onClick])

  return null
}

