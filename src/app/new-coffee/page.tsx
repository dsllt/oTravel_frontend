"use client"
import styles from "./page.module.css"



export default function Page() {
  return (
    <div className={styles.container}>
      <form>
        <h1> Inclua um novo café </h1>

        <label htmlFor="coffeeName" className={styles.coffeeLabel}>
          Nome do café
          <input id="coffeeName" type="text" />
        </label>

        <label htmlFor="coffeeAddress" className={styles.coffeeLabel}>
          Endereço do café
          <input id="coffeeAddress" type="text" />
        </label>

        <div className={styles.coffeeCoordinates}>
          <label htmlFor="coffeeLatitude" className={styles.coffeeLabel}>
            Latitude
            <input id="coffeeLatitude" type="text" />
          </label>
          <label htmlFor="coffeeLongitude" className={styles.coffeeLabel}>
            Longitude
            <input id="coffeeLongitude" type="text" />
          </label>
        </div>

        <label htmlFor="coffeePhone" className={styles.coffeeLabel}>
          Telefone do café
          <input id="coffeePhone" type="tel" />
        </label>

        <label htmlFor="coffeeImage" className={styles.coffeeLabel}>
          URL da imagem
          <input id="coffeeImage" type="url" />
        </label>

        <label htmlFor="coffeeDescription" className={styles.coffeeLabel}>
          Descrição
          <input id="coffeeDescription" type="text" />
        </label>

        <label htmlFor="coffeeSlug" className={styles.coffeeLabel}>
          Slug
          <input id="coffeeSlug" type="text" />
        </label>

        <div className={styles.buttons}>
          <button type="submit">Cadastrar</button>
          <button type="button">Voltar</button>
        </div>

      </form>

    </div>
  );
}
