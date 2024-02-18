import { PlaceBox, SearchHeader } from "@ui/index";

import styles from './page.module.css'
import { fetchPlaces } from "@lib/data";
import { Place } from "@app/lib/type-definitions";


export default async function Page({searchParams}: {searchParams?: { query?: string}}) {
  const query = searchParams?.query || '';
  const placeData: Place[] = await fetchPlaces();
  
  let filteredPlaces = placeData.filter(place => {return place.name.toLowerCase().includes(query.toLowerCase())})
  
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <span className={styles['header-text']}>Descubra sua próxima experiência</span>
      </div>

      <div className={styles['body-container']}>
        <SearchHeader />
        <div className={styles['coffees-container']}>
          {filteredPlaces.map(place => {
            return(
              <PlaceBox key={place.id} placeInfo={place} />
            )
          })}
        </div>
      </div>
    </main>
  )
}
 