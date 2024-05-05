"use client"
import { useFormState } from "react-dom";
import { updatePlace } from "../../../../lib/actions";
import styles from "./page.module.css"

const placeInfo = {
  createdAt: "2024-01-13T15:56:56.376Z",
  name: 'THE COFFEE',
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
    <div className="flex flex-col items-center justify-center rounded-lg my-10 mx-80 py-12 bg-base-300">
      <form action={dispatch}>
        <h1 className="text-2xl text-center mb-5"> Edite os dados do local </h1>

        <label htmlFor="placeName" className="text-sm mb-4 flex flex-col w-full">
          Nome do local
          <input
            id="placeName"
            name="placeName"
            type="text"
            className="input input-bordered w-full mt-2"
            defaultValue={placeInfo.name}
            required
          />
        </label>

        <label htmlFor="placeAddress" className="text-sm mb-4 flex flex-col w-full">
          Endereço
          <input
            id="placeAddress"
            name="placeAddress"
            type="text"
            className="input input-bordered w-full mt-2"
            defaultValue={placeInfo.address}
            required
          />
        </label>

        <div className={styles.placeCoordinates}>
          <label htmlFor="placeLatitude" className="text-sm mb-4 flex flex-col w-full">
            Latitude
            <input
              id="placeLatitude"
              name="placeLatitude"
              type="text"
              className="input input-bordered w-full mt-2"
              defaultValue={placeInfo.latitude}
              required
            />
          </label>
          <label htmlFor="placeLongitude" className="text-sm mb-4 flex flex-col w-full">
            Longitude
            <input
              id="placeLongitude"
              name="placeLongitude"
              type="text"
              className="input input-bordered w-full mt-2"
              defaultValue={placeInfo.longitude}
              required
            />
          </label>
        </div>

        <label htmlFor="placeImage" className="text-sm mb-4 flex flex-col w-full">
          URL da imagem
          <input
            id="placeImage"
            name="placeImage"
            type="url"
            className="input input-bordered w-full mt-2"
            defaultValue={placeInfo.image}
            required
          />
        </label>

        <div className={styles.bottomDiv}>
          <div className={styles.leftDiv}>
            <label htmlFor="placeDescription" className="text-sm mb-4 flex flex-col w-full">
              Descrição
              <textarea
                id="placeDescription"
                name="placeDescription"
                className="textarea textarea-bordered mt-2 h-full"
                defaultValue={placeInfo.description}
                required
              />
            </label>
          </div>
          <div className={styles.rightDiv}>
            <label htmlFor="placePhone" className="text-sm mb-4 flex flex-col w-full">
              Telefone
              <input
                id="placePhone"
                name="placePhone"
                type="tel"
                className="input input-bordered w-full mt-2"
                defaultValue={placeInfo.phone}
              />
            </label>
            <label htmlFor="placeSlug" className="text-sm mb-4 flex flex-col w-full">
              Slug
              <input
                id="placeSlug"
                name="placeSlug"
                type="text"
                className="input input-bordered w-full mt-2"
                defaultValue={placeInfo.slug}
                required
              />
            </label>
          </div>
        </div>



        <div className="flex items-center justify-center mt-4 gap-10">
          <button type="submit"
            className="btn btn-accent">Salvar</button>
          <button type="button" className="btn btn-neutral">Voltar</button>
        </div>

      </form>

    </div>
  );
}
