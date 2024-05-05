'use client'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import CoffeeIcon from '../../../public/assets/icons/coffee-icon.svg'

const placeInfo = [{
  createdAt: "2024-01-13T15:56:56.376Z",
  name: 'THE COFFEE',
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
  name: 'ESPAÇO BRASCO',
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

export default function Map() {
  return (
    <div>
      <MapContainer
        style={{ height: '70vh', width: '80vw' }}
        center={[-30.0352, -51.2109]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png"
        />
        {placeInfo.map(place => {
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