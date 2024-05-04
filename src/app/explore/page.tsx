import { PlaceBox, SearchHeader } from "../../components/index";

import { fetchPlaces } from "../../lib/data";
import { Place } from "../../lib/type-definitions";

export const placesData: Place[] = [
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    image_url: 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/cafes/Cafe%20Landing%20Page/Cafe-Jackson-Square-Hero.jpg',
    name: 'THE COFFEE',
    description: 'Um ótimo lugar para tomar café!',
    address: 'Rua Fernandes Vieira, 656 - Bom Fim',
    latitude: 10.456,
    longitude: 10.98,
    phone: '+55 51 1234-5678',
    slug: 'the-coffee',
    type: 'coffee',
    rating: 4.5,
    created_at: new Date('2024-01-13T15:56:56.376Z'),
    updated_at: new Date('2024-01-13T15:56:56.376Z'),
    is_deleted: false
  },
  {
    id: '9958dc9e-742f-4377-85e9-fec4b6a6442b',
    image_url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'The Tea Place',
    description: 'Venha experimentar uma grande variedade de chás!',
    address: 'Avenida Principal, 123 - Centro',
    latitude: 12.345,
    longitude: 11.111,
    phone: '+55 51 9876-5432',
    slug: 'the-tea-place',
    type: 'tea',
    rating: 4.2,
    created_at: new Date('2024-02-20T10:30:00.000Z'),
    updated_at: new Date('2024-02-20T10:30:00.000Z'),
    is_deleted: false
  },
  {
    id: '2958dc9e-742f-4377-85e9-fec4b6a6442c',
    image_url: 'https://images.unsplash.com/photo-1617655699589-64375e5ad9a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Pizza Haven',
    description: 'A melhor pizza da cidade!',
    address: 'Rua das Pizzas, 321 - Vila Italiana',
    latitude: 9.876,
    longitude: 12.345,
    phone: '+55 51 5555-5555',
    slug: 'pizza-haven',
    type: 'pizza',
    rating: 4.8,
    created_at: new Date('2024-03-10T18:45:00.000Z'),
    updated_at: new Date('2024-03-10T18:45:00.000Z'),
    is_deleted: false
  },
  {
    id: '1958dc9e-742f-4377-85e9-fec4b6a6442d',
    image_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Burger Palace',
    description: 'Os hambúrgueres mais suculentos da região!',
    address: 'Avenida dos Hamburguers, 567 - Centro',
    latitude: 11.111,
    longitude: 9.876,
    phone: '+55 51 3333-3333',
    slug: 'burger-palace',
    type: 'burger',
    rating: 4.6,
    created_at: new Date('2024-04-05T12:15:00.000Z'),
    updated_at: new Date('2024-04-05T12:15:00.000Z'),
    is_deleted: false
  },
  {
    id: '4958dc9e-742f-4377-85e9-fec4b6a6442e',
    image_url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Sushi Spot',
    description: 'Experimente a autêntica culinária japonesa!',
    address: 'Rua dos Sushis, 789 - Bairro Oriental',
    latitude: 12.222,
    longitude: 10.123,
    phone: '+55 51 4444-4444',
    slug: 'sushi-spot',
    type: 'sushi',
    rating: 4.9,
    created_at: new Date('2024-04-20T20:00:00.000Z'),
    updated_at: new Date('2024-04-20T20:00:00.000Z'),
    is_deleted: false
  },
  {
    id: '6958dc9e-742f-4377-85e9-fec4b6a6442f',
    image_url: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Taco Truck',
    description: 'Deliciosos tacos mexicanos feitos na hora!',
    address: 'Rua dos Tacos, 432 - Cantina Mexicana',
    latitude: 10.987,
    longitude: 11.987,
    phone: '+55 51 6666-6666',
    slug: 'taco-truck',
    type: 'mexican',
    rating: 4.4,
    created_at: new Date('2024-05-01T17:30:00.000Z'),
    updated_at: new Date('2024-05-01T17:30:00.000Z'),
    is_deleted: false
  },
  {
    id: '7958dc9e-742f-4377-85e9-fec4b6a6442g',
    image_url: 'https://images.unsplash.com/photo-1597869719075-4293e15326b5?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Gelato Paradise',
    description: 'Sorvetes italianos artesanais feitos com ingredientes frescos!',
    address: 'Avenida Gelada, 987 - Sorveteria Italiana',
    latitude: 11.345,
    longitude: 9.765,
    phone: '+55 51 7777-7777',
    slug: 'gelato-paradise',
    type: 'gelato',
    rating: 4.7,
    created_at: new Date('2024-05-10T14:00:00.000Z'),
    updated_at: new Date('2024-05-10T14:00:00.000Z'),
    is_deleted: false
  },
  {
    id: '8958dc9e-742f-4377-85e9-fec4b6a6442h',
    image_url: 'https://images.unsplash.com/photo-1570038283490-0c2b8fe95b2b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Bakery Delight',
    description: 'Pães frescos e doces deliciosos para todos os gostos!',
    address: 'Rua das Padarias, 741 - Bairro da Confeitaria',
    latitude: 9.654,
    longitude: 11.876,
    phone: '+55 51 8888-8888',
    slug: 'bakery-delight',
    type: 'bakery',
    rating: 4.3,
    created_at: new Date('2024-06-15T08:00:00.000Z'),
    updated_at: new Date('2024-06-15T08:00:00.000Z'),
    is_deleted: false
  },
  {
    id: '9958dc9e-742f-4377-85e9-fec4b6a6442i',
    image_url: 'https://images.unsplash.com/photo-1600353565724-30b80701a3aa?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Vegan Garden',
    description: 'Comidas veganas deliciosas e saudáveis!',
    address: 'Rua das Plantas, 567 - Jardim Vegano',
    latitude: 10.222,
    longitude: 12.333,
    phone: '+55 51 9999-9999',
    slug: 'vegan-garden',
    type: 'vegan',
    rating: 4.1,
    created_at: new Date('2024-07-02T12:30:00.000Z'),
    updated_at: new Date('2024-07-02T12:30:00.000Z'),
    is_deleted: false
  },
  {
    id: '1958dc9e-742f-4377-85e9-fec4b6a6442j',
    image_url: 'https://images.unsplash.com/photo-1511914678378-2906b1f69dcf?q=80&w=2336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'BBQ Joint',
    description: 'Carnes suculentas grelhadas à perfeição!',
    address: 'Avenida do Churrasco, 123 - Bairro do Churrasqueiro',
    latitude: 11.567,
    longitude: 10.987,
    phone: '+55 51 1010-2020',
    slug: 'bbq-joint',
    type: 'bbq',
    rating: 4.7,
    created_at: new Date('2024-08-10T19:00:00.000Z'),
    updated_at: new Date('2024-08-10T19:00:00.000Z'),
    is_deleted: false
  }
];


export default async function Page({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query || '';
  // const placeData: Place[] = await fetchPlaces();

  let filteredPlaces = placesData.filter(place => { return place.name.toLowerCase().includes(query.toLowerCase()) })

  return (
    <main className="flex flex-col w-full items-center mb-16">
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1538334421852-687c439c92f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Olá</h1>
            <p className="mb-5">Descubra restaurantes e cafés com ambientes perfeitos perto de você com apenas alguns cliques. </p>
            <a href="#search" className="btn btn-primary">Encontrar</a>
          </div>
        </div>
      </div>

      <div id='search' className="mt-12 px-16 w-full">
        <SearchHeader />
        <div className="flex flex-wrap gap-5 justify-center items-center mt-4">

          {filteredPlaces.map(place => {
            return (
              <PlaceBox key={place.id} placeInfo={place} />
            )
          })}
        </div>
      </div>
    </main>
  )
}
