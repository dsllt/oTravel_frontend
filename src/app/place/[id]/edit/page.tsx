"use client"
import { useFormState } from "react-dom";
import { updatePlace } from "../../../lib/actions";
import styles from "./page.module.css"

const placeInfo = {
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
  const updatePlaceWithId = updatePlace.bind(null, (placeInfo.id));
  const [state, dispatch] = useFormState(updatePlaceWithId, initialState);

  return (
    <div className={styles.container}>
      <form action={dispatch}>
        <h1> Edite os dados de um café </h1>

        <label htmlFor="placeName" className={styles.placeLabel}>
          Nome do café
          <input 
            id="placeName" 
            name="placeName" 
            type="text"
            defaultValue={placeInfo.name}
            required
          />
        </label>

        <label htmlFor="placeAddress" className={styles.placeLabel}>
          Endereço do café
          <input 
            id="placeAddress" 
            name="placeAddress" 
            type="text" 
            defaultValue={placeInfo.address}
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
              defaultValue={placeInfo.latitude}
              required
            />
          </label>
          <label htmlFor="placeLongitude" className={styles.placeLabel}>
            Longitude
            <input 
              id="placeLongitude" 
              name="placeLongitude" 
              type="text" 
              defaultValue={placeInfo.longitude}
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
            defaultValue={placeInfo.image}
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
              defaultValue={placeInfo.description}
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
              defaultValue={placeInfo.phone}
            />
            </label>
            <label htmlFor="placeSlug" className={styles.placeLabel}>
            Slug
            <input 
              id="placeSlug" 
              name="placeSlug" 
              type="text" 
              defaultValue={placeInfo.slug}
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
