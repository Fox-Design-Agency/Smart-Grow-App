import type { IGrowingLevel } from './growingLevel';

export interface ICreateGrowingLevelResponse {
	id: string;
}

export interface IDeleteGrowingLevelResponse {
	id: string;
}

export interface IEditGrowingLevelResponse {
	level: IGrowingLevel;
}

export interface IGetGrowingLevelResponse {
	level: IGrowingLevel;
}

export interface IGetAllGrowingLevelResponse {
	levels: IGrowingLevel[];
}
