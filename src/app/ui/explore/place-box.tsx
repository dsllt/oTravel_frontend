'use client'

import Image from 'next/image'
import styles from './place-box.module.css'
import { CoffeeIcon } from '../coffee-icon'
import { useRouter } from 'next/navigation'

export function PlaceBox({ placeInfo }: any) {
  const router = useRouter();
  function handleClickPlaceBox(id: string) {
    router.push(`/explore/${id}`)
  }
  return (
    <>

      <div className="card w-96 bg-base-100 shadow-xl hover:opacity-50 hover:cursor-pointer">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between">
            {placeInfo.name}
            <div className="badge badge-secondary">4.5 </div>
          </h2>
          <p>{placeInfo.address}</p>

        </div>
      </div>


      {/* <div className={styles.container} onClick={() => handleClickPlaceBox(placeInfo.id)}>
        <Image
          src={placeInfo.image_url}
          alt="coffee"
          width={400}
          height={400}
          className={styles.image}
        />
        <div className={styles.info}>
          <h2>{placeInfo.name}</h2>
          <div className={styles['info-text']}>
            <span>{placeInfo.address}</span>
            <span>
              {placeInfo.rating}
              <CoffeeIcon />
            </span>
          </div>
        </div>


      </div> */}
    </>



  )
}

