import type { IPlant } from './plant';

export interface ICreatePlantResponse {
	id: string;
}

export interface IDeletePlantResponse {
	id: string;
}

export interface IEditPlantResponse {
	plant: IPlant;
}

export interface IGetPlantResponse {
	plant: IPlant;
}

export interface IGetAllPlantResponse {
	plants: IPlant[];
}
