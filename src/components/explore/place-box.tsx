'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function PlaceBox({ placeInfo }: any) {
  const router = useRouter();
  function handleClickPlaceBox(id: string) {
    router.push(`/explore/${id}`)
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:opacity-50 hover:cursor-pointer" onClick={() => handleClickPlaceBox(placeInfo.id)}>
      <figure className='h-52'>
        <Image src={placeInfo.image_url} alt={placeInfo.name} width={500} height={200} style={{ objectFit: "contain" }} />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between">
          {placeInfo.name}
          <div className="badge badge-secondary">4.5 </div>
        </h2>
        <p>{placeInfo.address}</p>
      </div>
    </div>
  )
}

