import type { IPlantCategory } from './plantCategory';

export interface ICreatePlantCategoryResponse {
	id: string;
}

export interface IDeletePlantCategoryResponse {
	id: string;
}

export interface IEditPlantCategoryResponse {
	category: IPlantCategory;
}

export interface IGetPlantCategoryResponse {
	category: IPlantCategory;
}

export interface IGetAllPlantCategoryResponse {
	categories: IPlantCategory[];
}
