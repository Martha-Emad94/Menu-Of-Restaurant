import { Meals } from "./meals";

export interface MenuItem {
    name: string;
    image: string;
    meals: Meals[];
}
