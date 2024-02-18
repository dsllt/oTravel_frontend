"use client"
import { useFormState } from "react-dom";
import { includePlace } from "../lib/actions";
import styles from "./page.module.css"



export default function Page() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(includePlace, initialState);

  return (
    <div className={styles.container}>
      <form action={dispatch}>
        <h1> Inclua um novo café </h1>

        <label htmlFor="placeName" className={styles.placeLabel}>
          Nome do café
          <input 
            id="placeName" 
            name="placeName" 
            type="text" 
            required
          />
        </label>

        <label htmlFor="placeAddress" className={styles.placeLabel}>
          Endereço do café
          <input 
            id="placeAddress" 
            name="placeAddress" 
            type="text" 
            required
          />
        </label>

        <div className={styles.placeCoordinates}>
          <label htmlFor="placeLatitude" className={styles.placeLabel}>
            Latitude
            <input 
              id="placeLatitude" 
              name="placeLatitude" 
              type="text" 
              required
            />
          </label>
          <label htmlFor="placeLongitude" className={styles.placeLabel}>
            Longitude
            <input 
              id="placeLongitude" 
              name="placeLongitude" 
              type="text" 
              required
            />
          </label>
        </div>

        <label htmlFor="placeImage" className={styles.placeLabel}>
          URL da imagem
          <input 
            id="placeImage" 
            name="placeImage" 
            type="url" 
            required
          />
        </label>

        <div className={styles.bottomDiv}>
          <div className={styles.leftDiv}>
          <label htmlFor="placeDescription" className={styles.placeLabel}>
            Descrição
            <textarea 
              id="placeDescription" 
              name="placeDescription" 
              className={styles.placeDescription}
              required
            />
          </label>
          </div>
          <div className={styles.rightDiv}>
            <label htmlFor="placePhone" className={styles.placeLabel}>
            Telefone do café
            <input 
              id="placePhone" 
              name="placePhone" 
              type="tel" 
            />
            </label>
            <label htmlFor="placeSlug" className={styles.placeLabel}>
            Slug
            <input 
              id="placeSlug" 
              name="placeSlug" 
              type="text" 
              required
            />
          </label>
          </div>
        </div>

        <div className={styles.buttons}>
          <button type="submit" 
          >Cadastrar</button>
          <button type="button">Voltar</button>
        </div>

      </form>

    </div>
  );
}
