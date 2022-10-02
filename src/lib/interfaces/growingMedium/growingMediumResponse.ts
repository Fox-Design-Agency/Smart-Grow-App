import type { IGrowingMedium } from './growingMedium';

export interface ICreateGrowingMediumResponse {
	id: string;
}

export interface IDeleteGrowingMediumResponse {
	id: string;
}

export interface IEditGrowingMediumResponse {
	medium: IGrowingMedium;
}

export interface IGetGrowingMediumResponse {
	medium: IGrowingMedium;
}

export interface IGetAllGrowingMediumResponse {
	mediums: IGrowingMedium[];
}
