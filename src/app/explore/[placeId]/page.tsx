import { fetchPlace } from "@lib/data";
import { Place, UserDTO } from "@lib/type-definitions";
import Image from "next/image";
import ReviewBox from "@ui/profile/review-box";

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
    user_id: 2,
    place_id: 2
  },
]

const users: UserDTO[] = [{
  id: 1,
  name: "Cristofer Rosser",
  email: "c@email.com",
  is_admin: false,
  image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2",
  created_at: "2019-01-21T09:46:10.477Z"
},
{
  id: 2,
  name: "John Doe",
  email: "john@email.com",
  is_admin: false,
  image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2",
  created_at: "2020-01-12T09:46:10.477Z"
}]

export default async function PlacePage({ params }: { params: { placeId: string } }) {
  const placeData: Place = fetchPlace(params.placeId);
  const placeName = placeData.name.toLowerCase();

  return (
    <div className="w-full flex flex-col gap-16 my-10 items-center justify-center">

      <div className="flex w-full h-[350px] justify-center items-start gap-16">
        <div className="max-h-[350px] overflow-hidden">
          <Image
            src={placeData.image_url}
            alt=""
            style={{ objectFit: 'cover', borderRadius: '1rem' }}
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="flex flex-col gap-4 font-dmSans">
          <h1 className="text-5xl uppercase font-semibold mb-4">{placeName}</h1>
          <p className="text-lg text-gray-400 mb-2">{placeData.address}</p>
          <p>{placeData.description}</p>
        </div>
      </div>

      <div className="w-2/4">
        <h1 className="font-bold text-xl font-dmSans mb-4">
          Reviews
        </h1>
        {reviews.map(review => {
          const user = users.find(user => user.id === review.user_id);

          if (user !== undefined) {
            return <ReviewBox key={review.id} review={review} user={user} />
          }

        })}
      </div>
    </div>
  )
}