'use client'
import ReviewBox from '../../components/review-box';
import { ProfileInfoBox } from '../../components/profile/profile-info-box';
import { UserDTO } from '../../lib/type-definitions';
import { ProfileFavorite } from '@ui/profile/profile-favorite';

const reviews = [
  {
    id: 1,
    review: "Fui apenas uma vez e eu pedi um chocolate quente, mas achei muito forte! Claro isso vai de pessoa para pessoa. Não consegui tomar todo por conta disso. O ambiente é pequeno mas é bem organizado, um lugar muito bonito. O atendimento é ótimo.",
    rating: 4.5,
    created_at: "2024-01-21T09:46:10.477Z",
    user_id: 1,
    place_id: 1
  },
  {
    id: 2,
    review: "Boa bastante satisfatória, um pouco cheio de mais que significa alta qualidade sabor do produto vendido... Recomendo até para trabalhar lá tive uma experiência feliz si possível  gostaria de voltar a trabalhar após uma formatura de nível superior.",
    rating: 4.0,
    created_at: "2024-01-24T09:46:10.477Z",
    user_id: 1,
    place_id: 2
  },
]

const user: UserDTO = {
  id: 1,
  name: "Cristofer Rosser",
  email: "c@email.com",
  is_admin: false,
  image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2",
  created_at: "2019-01-21T09:46:10.477Z"
}

const favorites = [
  {
    id: 1,
    user_id: 1,
    coffee_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a'
  },
  {
    id: 2,
    user_id: 1,
    coffee_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a'
  },
  {
    id: 3,
    user_id: 1,
    coffee_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a'
  },
  {
    id: 4,
    user_id: 1,
    coffee_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a'
  },
]

export default function Page() {
  return (
    <div className="flex flex-col my-16 mx-24">
      <div className="flex gap-16">
        <ProfileInfoBox user={user} reviews={reviews.length} favorites={favorites.length} />
        <div className="flex flex-col">
          <h3 className='font-dmSans text-2xl mb-4'>Locais favoritados</h3>
          <div className='flex gap-4'>
            {favorites.map(favorite => {
              return <ProfileFavorite key={favorite.id} favorite={favorite} />
            })}
          </div>
          <h3 className='font-dmSans text-2xl mb-4 mt-8'>Reviews</h3>
          {reviews.map(review => {
            return <ReviewBox key={review.id} review={review} user={user} />
          })}
        </div>
      </div>
    </div>
  )
}
