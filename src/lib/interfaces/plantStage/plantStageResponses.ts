import type { IPlantStage } from './plantstage';

export interface ICreatePlantStageResponse {
	id: string;
}

export interface IDeletePlantStageResponse {
	id: string;
}

export interface IEditPlantStageResponse {
	stage: IPlantStage;
}

export interface IGetPlantStageResponse {
	stage: IPlantStage;
}

export interface IGetAllPlantStageResponse {
	stages: IPlantStage[];
}
