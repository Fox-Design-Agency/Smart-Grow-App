import type { IDeviceAction } from './deviceAction';

export interface ICreateDeviceActionResponse {
	id: string;
}

export interface IGetDeviceActionsResponse {
	actions: IDeviceAction[];
}
