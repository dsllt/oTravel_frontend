import { FoodType } from './menu';

export interface MenuDTO {
  name: string;
  type: FoodType;
  price: number;
  placeId: string;
}
