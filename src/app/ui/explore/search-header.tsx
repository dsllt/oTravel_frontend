
import { SearchInput } from './search-input'
import styles from './search-header.module.css'

export function SearchHeader() {

  return(
    <div className={styles.container}>
      <span>Busque por um café</span>
      <SearchInput  />
    </div>
  )
}