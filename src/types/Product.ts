import { Ingredient } from './Ingredient';
import { Category } from './Category';

export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	category: Category;
	ingredients: Ingredient[];
}
