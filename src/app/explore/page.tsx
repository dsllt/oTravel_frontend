import { CoffeeBox, SearchHeader } from "@ui/index";

import styles from './page.module.css'
import { fetchCoffees } from "@lib/data";
import { Coffee } from "@app/lib/type-definitions";


export default async function Page({searchParams}: {searchParams?: { query?: string}}) {
  const query = searchParams?.query || '';
  const coffeeData: Coffee[] = await fetchCoffees();
  
  let filteredCoffees = coffeeData.filter(coffee => {return coffee.name.toLowerCase().includes(query.toLowerCase())})
  
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <span className={styles['header-text']}>Descubra sua próxima experiência</span>
      </div>

      <div className={styles['body-container']}>
        <SearchHeader />
        <div className={styles['coffees-container']}>
          {filteredCoffees.map(coffee => {
            return(
              <CoffeeBox key={coffee.id} coffeeInfo={coffee} />
            )
          })}
        </div>
      </div>
    </main>
  )
}
 