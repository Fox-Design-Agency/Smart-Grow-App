import type { IGrowSpot } from './growSpot';

export interface ICreateGrowSpotResponse {
	id: string;
}

export interface IDeleteGrowSpotResponse {
	id: string;
}

export interface IEditGrowSpotResponse {
	spot: IGrowSpot;
}

export interface IGetGrowSpotResponse {
	spot: IGrowSpot;
}

export interface IGetAllGrowSpotResponse {
	spots: IGrowSpot[];
}
