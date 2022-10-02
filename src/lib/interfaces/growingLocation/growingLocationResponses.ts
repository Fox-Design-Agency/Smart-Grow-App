import type { IGrowingLocation } from './growingLocation';

export interface ICreateGrowingLocationResponse {
	id: string;
}

export interface IDeleteGrowingLocationResponse {
	id: string;
}

export interface IEditGrowingLocationResponse {
	location: IGrowingLocation;
}

export interface IGetGrowingLocationResponse {
	location: IGrowingLocation;
}

export interface IGetAllGrowingLocationResponse {
	locations: IGrowingLocation[];
}
