import Image from 'next/image'
import styles from './page.module.css'
import { fetchCoffees } from './lib/data'
import { SearchInput } from './ui/home/search-input';
import { SearchHeader } from './ui/home/search-header';
import { CoffeeBox } from './ui/home/coffee-box';


export default async function Home() {
  const coffeeData = await fetchCoffees();
  const coffeeInfo = {
    createdAt: "2024-01-13T15:56:56.376Z",
    name: "Heathcote - Spinka",
    image: "https://loremflickr.com/640/480/business",
    description: "secondary",
    address: "Kunde Views, 213/2",
    phone: "1-392-289-9430",
    latitude: "49.3316",
    longitude: "-169.3190",
    rating: 4.4,
    slug: "fuga-et-veniam",
    id: "1"
  }
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <span className={styles['header-text']}>Descubra sua próxima experiência</span>
      </div>

      <div className={styles['body-container']}>
        <SearchHeader />
        <div className={styles['coffees-container']}>
          <CoffeeBox coffeeInfo={coffeeInfo} />
          <CoffeeBox coffeeInfo={coffeeInfo} />
          <CoffeeBox coffeeInfo={coffeeInfo} />
        </div>
      </div>
    </main>
  )
}
