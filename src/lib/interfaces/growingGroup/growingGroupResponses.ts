import type { IGrowingGroup } from './growingGroup';

export interface ICreateGrowingGroupResponse {
	id: string;
}

export interface IDeleteGrowingGroupResponse {
	id: string;
}

export interface IEditGrowingGroupResponse {
	id: string;
}

export interface IGetGrowingGroupResponse {
	group: IGrowingGroup[];
}

export interface IGetAllGrowingGroupResponse {
	groups: IGrowingGroup[];
}
