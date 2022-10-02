import type {
	IDevice,
	IGrowingGroupDevice,
	IGrowingLevelDevice,
	IGrowingLocationDevice,
	IGrowingSpotDevice
} from './device';

export interface ICreateDeviceResponse {
	id: string;
}

export interface ICreateGrowingGroupDeviceResponse {
	id: string;
}

export interface ICreateGrowingLocationDeviceResponse {
	id: string;
}

export interface ICreateGrowingLevelDeviceResponse {
	id: string;
}

export interface ICreateGrowingSpotDeviceResponse {
	id: string;
}

export interface IDeleteDeviceResponse {
	id: string;
}

export interface IDeleteGrowingGroupDeviceResponse {
	id: string;
}

export interface IDeleteGrowingLocationDeviceResponse {
	id: string;
}

export interface IDeleteGrowingLevelDeviceResponse {
	id: string;
}

export interface IDeleteGrowingSpotDeviceResponse {
	id: string;
}

export interface IEditDeviceResponse {
	id: string;
}

export interface IGetDeviceResponse {
	id: string;
}

export interface IGetGrowingGroupDeviceResponse {
	id: string;
}

export interface IGetGrowingLocationDeviceResponse {
	id: string;
}

export interface IGetGrowingLevelDeviceResponse {
	id: string;
}

export interface IGetGrowingSpotDeviceResponse {
	id: string;
}

export interface IGetAllDeviceResponse {
	devices: IDevice[];
}

export interface IGetAllGrowingGroupDeviceResponse {
	devices: IGrowingGroupDevice[];
}

export interface IGetAllGrowingLocationDeviceResponse {
	devices: IGrowingLocationDevice[];
}

export interface IGetAllGrowingLevelDeviceResponse {
	devices: IGrowingLevelDevice[];
}

export interface IGetAllGrowingSpotDeviceResponse {
	devices: IGrowingSpotDevice[];
}
