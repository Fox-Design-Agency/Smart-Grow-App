import type { IPlantLifecycle } from './plantLifecycle';

export interface ICreatePlantLifecycleResponse {
	id: string;
}

export interface IDeletePlantLifecycleResponse {
	id: string;
}

export interface IEditPlantLifecycleResponse {
	lifecycle: IPlantLifecycle;
}

export interface IGetPlantLifecycleResponse {
	lifecycle: IPlantLifecycle;
}

export interface IGetAllPlantLifecycleResponse {
	lifecycles: IPlantLifecycle[];
}
