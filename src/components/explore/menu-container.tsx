type MenuContainerProps = {
  menu: {
    id: string;
    item: string;
    price: number;
    menu_type: string;
    place_id: string;
  }[]
}
export default function MenuContainer({ menu }: MenuContainerProps) {
  const drinks = menu != null ? menu.filter(menu => menu.menu_type === 'drink') : [];
  const foods = menu != null ? menu.filter(menu => menu.menu_type === 'food') : [];

  function displayDrinksList() {
    if (drinks.length > 0) {
      return drinks.map((drink) => {
        return (
          <tr className="hover:bg-base-100" key={drink.id}>
            <td className="rounded-l-md">{drink.item}</td>
            <td className="rounded-r-md">{drink.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
          </tr>
        )
      })
    } else {
      return <div className="mt-3">Sem bebidas resgistradas</div>
    }
  }
  function displayFoodsList() {
    if (foods.length > 0) {
      return foods.map((food) => {
        return (
          <tr className="hover:bg-base-100" key={food.id}>
            <td className="rounded-l-md">{food.item}</td>
            <td className="rounded-r-md">{food.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
          </tr>
        )
      })
    } else {
      return <div className="mt-3">Sem comidas resgistradas</div>
    }
  }

  return (<div className="flex gap-10 w-full justify-between">
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <h1 className="mb-3 font-bold">Bebidas</h1>
      <table className="table">
        <tbody>
          {displayDrinksList()}
        </tbody>
      </table>
    </div>
    <div className="bg-base-300 p-4 rounded-lg w-1/2">
      <h1 className="mb-3 font-bold">Comidas</h1>
      <table className="table">
        <tbody>
          {displayFoodsList()}
        </tbody>
      </table>
    </div>
  </div>)
}