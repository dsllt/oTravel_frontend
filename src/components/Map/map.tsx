'use client'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import CoffeeIcon from '../../../public/assets/icons/coffee-icon.svg'
import { Place } from '../../utils/type-definitions'

type MapProps = {
  places: Place[]
}

export default function Map({ places }: MapProps) {
  return (
    <div>
      <MapContainer
        style={{ height: '93vh', width: '75vw' }}
        center={[-30.0352, -51.2109]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png"
        />
        {places.map(place => {
          return (
            <Marker
              key={place.id}
              icon={
                new L.Icon({
                  iconUrl: CoffeeIcon.src,
                  iconSize: [25, 25],
                  iconAnchor: [12.5, 41],
                })}
              position={[Number(place.latitude), Number(place.longitude)]}
            >
              <Popup offset={[0, -20]}>
                <a href={`/explore/${place.id}`}>Visitar página</a>
              </Popup>
              <Tooltip direction="bottom" offset={[0, 0]} opacity={1}>
                <div className="flex flex-col">
                  <div className='flex justify-between items-center'>
                    <h1 className="text-md font-bold font-dmSans">{place.name}</h1>
                    <span className='flex items-center bg-secondary px-2 rounded-lg text-xs'>{place.rating}</span>
                  </div>
                  <span className='text-md text-gray-500'>{place.address}</span>
                </div>
              </Tooltip>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}