import type { IHarvest } from './harvest';

export interface ICreateHarvestResponse {
	id: string;
}

export interface IDeleteHarvestResponse {
	id: string;
}

export interface IEditHarvestResponse {
	harvest: IHarvest;
}

export interface IGetHarvestResponse {
	harvest: IHarvest;
}

export interface IGetAllHarvestResponse {
	harvests: IHarvest[];
}
