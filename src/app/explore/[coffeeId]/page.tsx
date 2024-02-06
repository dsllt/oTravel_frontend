import { fetchCoffee } from "@lib/data";
import { Coffee, UserDTO } from "@lib/type-definitions";
import Image from "next/image";
import styles from "./page.module.css"
import ReviewBox from "@ui/profile/review-box";

const reviews = [
  {
    id: 1,
    review: "Fui apenas uma vez e eu pedi um chocolate quente, mas achei muito forte! Claro isso vai de pessoa para pessoa. Não consegui tomar todo por conta disso. O ambiente é pequeno mas é bem organizado, um lugar muito bonito. O atendimento é ótimo.",
    rating: 4.5,
    created_at: "2024-01-21T09:46:10.477Z",
    user_id: 1,
    coffee_id: 1
  },
  {
    id: 2,
    review: "Boa bastante satisfatória, um pouco cheio de mais que significa alta qualidade sabor do produto vendido... Recomendo até para trabalhar lá tive uma experiência feliz si possível  gostaria de voltar a trabalhar após uma formatura de nível superior.",
    rating: 4.0,
    created_at: "2024-01-24T09:46:10.477Z",
    user_id: 2,
    coffee_id: 2
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

export default async function CoffeePage({params}: { params: {coffeeId: string}}){
  const coffeeData: Coffee = await fetchCoffee(params.coffeeId);
  const coffeeName = coffeeData.name.toLowerCase();

  return(
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image 
            src={coffeeData.image} 
            alt=""
            style={{objectFit: 'cover', borderRadius: '1rem'}}
            width={800} 
            height={400}
            priority
          />
        </div>
        <div className={styles.description}>
          <h1>{coffeeName}</h1>
          <p>{coffeeData.address}</p>
          <p>{coffeeData.description}</p>
        </div>
      </div>
      <div className={styles.reviews}>
        <h1>
          Reviews
        </h1>
        {reviews.map(review => {
          const user = users.find(user => user.id === review.user_id);

          if (user !== undefined){
            return <ReviewBox key={review.id} review={review} user={user}/>
          }

        })}
      </div>
    </div>
  )
}