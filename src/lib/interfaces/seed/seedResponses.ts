import type { ISeed } from './seed';

export interface ICreateSeedResponse {
	id: string;
}

export interface IDeleteSeedResponse {
	id: string;
}

export interface IEditSeedResponse {
	seed: ISeed;
}

export interface IGetSeedResponse {
	seed: ISeed;
}

export interface IGetAllSeedResponse {
	seeds: ISeed[];
}
