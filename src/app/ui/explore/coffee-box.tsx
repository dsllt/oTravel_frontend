'use client'

import Image from 'next/image'
import styles from './coffee-box.module.css'
import { CoffeeIcon } from '../coffee-icon'
import { useRouter } from 'next/navigation'

export function CoffeeBox({coffeeInfo}: any){
  const router = useRouter();
  function handleClickCoffeeBox(id: string){
    router.push(`/explore/${id}`)
  }
  return(
    <div className={styles.container} onClick={() => handleClickCoffeeBox(coffeeInfo.id)}>
      <Image 
        src={coffeeInfo.image} 
        alt="coffee" 
        width={400} 
        height={400}
        className={styles.image}
      />
      <div className={styles.info}>
        <h2>{coffeeInfo.name}</h2>
        <div className={styles['info-text']}>
          <span>{coffeeInfo.address}</span>
          <span>
            {coffeeInfo.rating} 
            <CoffeeIcon />
          </span>
        </div>
      </div>


    </div>
  )
}