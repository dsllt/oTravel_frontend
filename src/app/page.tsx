import Image from 'next/image'
import styles from './page.module.css'
import { fetchCoffees } from './lib/data'
import { SearchInput } from './ui/home/search-input';
import { SearchHeader } from './ui/home/search-header';


export default async function Home() {
  const coffeeData = await fetchCoffees();
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <span className={styles['header-text']}>Descubra sua próxima experiência</span>
      </div>

      <div className={styles['body-container']}>
        <SearchHeader />

      </div>
    </main>
  )
}
