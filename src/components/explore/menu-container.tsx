type MenuContainerProps = {
  menu: {
    drinks: {
      item: string;
      price: number;
    }[],
    foods: {
      item: string;
      price: number;
    }[]
  }
}
export default function MenuContainer({ menu }: MenuContainerProps) {
  return (<div className="flex gap-10 w-full justify-between">
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <h1 className="mb-3 font-bold">Bebidas</h1>
      <table className="table">
        <tbody>
          {menu.drinks.map((drink, index) => {
            return (
              <tr className="hover:bg-base-100" key={index}>
                <td className="rounded-l-md">{drink.item}</td>
                <td className="rounded-r-md">{drink.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <h1 className="mb-3 font-bold">Comidas</h1>
      <table className="table">
        <tbody>
          {menu.foods.map((food, index) => {
            return (
              <tr className="hover:bg-base-100" key={index}>
                <td className="rounded-l-md">{food.item}</td>
                <td className="rounded-r-md">{food.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>)
}