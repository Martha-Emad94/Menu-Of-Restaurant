import { Meals } from "./meals";
import { Drinks } from './drinks';

export interface Category {
    category: string;
    meals: Meals[];
    drinks:any[];
}
