"use client"
import { useFormState } from "react-dom";
import { includePlace } from "../../lib/actions";

export default function Page() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(includePlace, initialState);

  return (
    <div className="flex flex-col items-center justify-center rounded-lg my-10 mx-80 py-12 bg-base-300">
      <form action={dispatch}>
        <h1 className="text-2xl text-center mb-5"> Inclua um novo café </h1>

        <label htmlFor="placeName" className="text-sm mb-4 flex flex-col w-full">
          Nome do café
          <input
            id="placeName"
            name="placeName"
            type="text"
            className="input input-bordered w-full mt-2"
            required
          />
        </label>

        <label htmlFor="placeAddress" className="text-sm mb-4 flex flex-col w-full">
          Endereço do café
          <input
            id="placeAddress"
            name="placeAddress"
            type="text"
            className="input input-bordered w-full mt-2"
            required
          />
        </label>

        <div className="flex gap-4">
          <label htmlFor="placeLatitude" className="text-sm mb-4 flex flex-col w-full">
            Latitude
            <input
              id="placeLatitude"
              name="placeLatitude"
              type="text"
              className="input input-bordered w-full mt-2"
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
            required
          />
        </label>

        <div className="flex justify-between gap-4">
          <div className="flex w-1/2 h-[184px]">
            <label htmlFor="placeDescription" className="text-sm mb-4 flex flex-col w-full">
              Descrição
              <textarea
                id="placeDescription"
                name="placeDescription"
                className="textarea textarea-bordered mt-2 h-full"
                required
              />
            </label>
          </div>
          <div className="flex w-1/2 flex-col">
            <label htmlFor="placePhone" className="text-sm mb-4 flex flex-col w-full">
              Telefone do café
              <input
                id="placePhone"
                name="placePhone"
                type="tel"
                className="input input-bordered w-full mt-2"
              />
            </label>
            <label htmlFor="placeSlug" className="text-sm mb-4 flex flex-col w-full">
              Slug
              <input
                id="placeSlug"
                name="placeSlug"
                type="text"
                className="input input-bordered w-full mt-2"
                required
              />
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center mt-4 gap-10">
          <button type="submit"
            className="btn btn-accent"
          >Cadastrar</button>
          <button type="button" className="btn btn-neutral">Voltar</button>
        </div>

      </form>

    </div>
  );
}
