"use client"
import { useFormState } from "react-dom";
import { updateCoffee } from "../../../lib/actions";
import styles from "./page.module.css"

const coffeeInfo = {
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
}

export default function Page() {
  const initialState = { message: "", errors: {} };
  const updateCoffeeWithId = updateCoffee.bind(null, (coffeeInfo.id));
  const [state, dispatch] = useFormState(updateCoffeeWithId, initialState);

  return (
    <div className={styles.container}>
      <form action={dispatch}>
        <h1> Edite os dados de um café </h1>

        <label htmlFor="coffeeName" className={styles.coffeeLabel}>
          Nome do café
          <input 
            id="coffeeName" 
            name="coffeeName" 
            type="text"
            defaultValue={coffeeInfo.name}
            required
          />
        </label>

        <label htmlFor="coffeeAddress" className={styles.coffeeLabel}>
          Endereço do café
          <input 
            id="coffeeAddress" 
            name="coffeeAddress" 
            type="text" 
            defaultValue={coffeeInfo.address}
            required
          />
        </label>

        <div className={styles.coffeeCoordinates}>
          <label htmlFor="coffeeLatitude" className={styles.coffeeLabel}>
            Latitude
            <input 
              id="coffeeLatitude" 
              name="coffeeLatitude" 
              type="text" 
              defaultValue={coffeeInfo.latitude}
              required
            />
          </label>
          <label htmlFor="coffeeLongitude" className={styles.coffeeLabel}>
            Longitude
            <input 
              id="coffeeLongitude" 
              name="coffeeLongitude" 
              type="text" 
              defaultValue={coffeeInfo.longitude}
              required
            />
          </label>
        </div>

        <label htmlFor="coffeeImage" className={styles.coffeeLabel}>
          URL da imagem
          <input 
            id="coffeeImage" 
            name="coffeeImage" 
            type="url" 
            defaultValue={coffeeInfo.image}
            required
          />
        </label>

        <div className={styles.bottomDiv}>
          <div className={styles.leftDiv}>
          <label htmlFor="coffeeDescription" className={styles.coffeeLabel}>
            Descrição
            <textarea 
              id="coffeeDescription" 
              name="coffeeDescription" 
              className={styles.coffeeDescription}
              defaultValue={coffeeInfo.description}
              required
            />
          </label>
          </div>
          <div className={styles.rightDiv}>
            <label htmlFor="coffeePhone" className={styles.coffeeLabel}>
            Telefone do café
            <input 
              id="coffeePhone" 
              name="coffeePhone" 
              type="tel" 
              defaultValue={coffeeInfo.phone}
            />
            </label>
            <label htmlFor="coffeeSlug" className={styles.coffeeLabel}>
            Slug
            <input 
              id="coffeeSlug" 
              name="coffeeSlug" 
              type="text" 
              defaultValue={coffeeInfo.slug}
              required
            />
          </label>
          </div>
        </div>



        <div className={styles.buttons}>
          <button type="submit">Salvar</button>
          <button type="button">Voltar</button>
        </div>

      </form>

    </div>
  );
}
