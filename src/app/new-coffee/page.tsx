"use client"
import { useFormState } from "react-dom";
import { includeCoffee } from "../lib/actions";
import styles from "./page.module.css"



export default function Page() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(includeCoffee, initialState);

  return (
    <div className={styles.container}>
      <form action={dispatch}>
        <h1> Inclua um novo café </h1>

        <label htmlFor="coffeeName" className={styles.coffeeLabel}>
          Nome do café
          <input 
            id="coffeeName" 
            name="coffeeName" 
            type="text" 
            required
          />
        </label>

        <label htmlFor="coffeeAddress" className={styles.coffeeLabel}>
          Endereço do café
          <input 
            id="coffeeAddress" 
            name="coffeeAddress" 
            type="text" 
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
              required
            />
          </label>
          <label htmlFor="coffeeLongitude" className={styles.coffeeLabel}>
            Longitude
            <input 
              id="coffeeLongitude" 
              name="coffeeLongitude" 
              type="text" 
              required
            />
          </label>
        </div>

        <label htmlFor="coffeePhone" className={styles.coffeeLabel}>
          Telefone do café
          <input 
            id="coffeePhone" 
            name="coffeePhone" 
            type="tel" 
          />
        </label>

        <label htmlFor="coffeeImage" className={styles.coffeeLabel}>
          URL da imagem
          <input 
            id="coffeeImage" 
            name="coffeeImage" 
            type="url" 
            required
          />
        </label>

        <label htmlFor="coffeeDescription" className={styles.coffeeLabel}>
          Descrição
          <input 
            id="coffeeDescription" 
            name="coffeeDescription" 
            type="text" 
            required
          />
        </label>

        <label htmlFor="coffeeSlug" className={styles.coffeeLabel}>
          Slug
          <input 
            id="coffeeSlug" 
            name="coffeeSlug" 
            type="text" 
            required
          />
        </label>

        <div className={styles.buttons}>
          <button type="submit" 
          >Cadastrar</button>
          <button type="button">Voltar</button>
        </div>

      </form>

    </div>
  );
}
