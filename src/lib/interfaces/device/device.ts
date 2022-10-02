export interface IDevice {
	id: string;
	displayName: string;
}

export interface IGrowingGroupDevice {
	id: string;
	device: IDevice;
}

export interface IGrowingLocationDevice {
	id: string;
	device: IDevice;
}

export interface IGrowingLevelDevice {
	id: string;
	device: IDevice;
}

export interface IGrowingSpotDevice {
	id: string;
	device: IDevice;
}
