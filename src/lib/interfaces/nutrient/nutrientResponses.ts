import type { INutrient } from './nutrient';

export interface ICreateNutrientResponse {
	id: string;
}

export interface IDeleteNutrientResponse {
	id: string;
}

export interface IEditNutrientResponse {
	nutrient: INutrient;
}

export interface IGetNutrientResponse {
	nutrient: INutrient;
}

export interface IGetAllNutrientResponse {
	nutrients: INutrient[];
}
