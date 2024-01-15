import Image from 'next/image'
import styles from './search-input.module.css'

export function SearchInput() {
  return(
    <div className={styles.main}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none"  strokeWidth="1.5" stroke="currentColor" className={styles.icon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input className={styles['search-input']} type="text" placeholder='Busque por um café' />
  </div>
  )
}