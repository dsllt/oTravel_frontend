export interface Menu {
  id: string;
  name: string;
  type: FoodType;
  price: number;
  place: string;
}

export enum FoodType {
  FOOD = 'FOOD',
  DRINK = 'DRINK',
}
