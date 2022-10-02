import type { IGrowSpotPlant } from './growSpotPlant';

export interface ICreateGrowSpotPlantResponse {
	id: string;
}

export interface IDeleteGrowSpotPlantResponse {
	id: string;
}

export interface IEditGrowSpotPlantResponse {
	plant: IGrowSpotPlant;
}

export interface IGetGrowSpotPlantResponse {
	plant: IGrowSpotPlant;
}

export interface IGetAllGrowSpotPlantResponse {
	plants: IGrowSpotPlant[];
}
