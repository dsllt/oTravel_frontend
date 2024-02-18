'use client'

import Image from 'next/image'
import styles from './place-box.module.css'
import { CoffeeIcon } from '../coffee-icon'
import { useRouter } from 'next/navigation'

export function PlaceBox({placeInfo}: any){
  const router = useRouter();
  function handleClickPlaceBox(id: string){
    router.push(`/explore/${id}`)
  }
  return(
    <div className={styles.container} onClick={() => handleClickPlaceBox(placeInfo.id)}>
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


    </div>
  )
}