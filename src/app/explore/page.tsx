import { fetchCoffees } from "../lib/data";
import { CoffeeBox, SearchHeader } from "../ui";
import styles from './page.module.css'

const coffeeInfo = [{
  createdAt: "2024-01-13T15:56:56.376Z",
  name:'THE COFFEE',
  image: "https://loremflickr.com/640/480/business",
  description: "secondary",
  address: 'Rua Fernandes Vieira, 656 - Bom Fim',
  phone: "1-392-289-9430",
  latitude: "-30.035212829644085",
  longitude: "-51.210918285789916",
  rating: 4.4,
  slug: "the-coffee",
  id: "1"
},
{
  createdAt: "2024-01-13T15:56:56.376Z",
  name:'ESPAÇO BRASCO',
  image: "https://loremflickr.com/640/484/business",
  description: "secondary",
  address: 'Rua Fernandes Vieira, 286 - Bom Fim',
  phone: "1-392-289-9430",
  latitude: "-30.03193402658714",
  longitude: "-51.21070994496208",
  rating: 4.7,
  slug: "brasco-cafe",
  id: "2"
},
{
  createdAt: "2024-01-13T15:56:56.376Z",
  name:'OURO PÃES',
  image: "https://loremflickr.com/640/481/business",
  description: "secondary",
  address: 'Rua Fernandes Vieira, 286 - Bom Fim',
  phone: "1-392-289-9430",
  latitude: "-30.03193402658714",
  longitude: "-51.21070994496208",
  rating: 4.7,
  slug: "ouro-cafe",
  id: "3"
}]

export default async function Page({searchParams}: {searchParams?: { query?: string}}) {
  const query = searchParams?.query || '';
  
  let filteredCoffees = coffeeInfo.filter(coffee => {return coffee.name.toLowerCase().includes(query.toLowerCase())})
  
  const coffeeData = await fetchCoffees();
  
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
 