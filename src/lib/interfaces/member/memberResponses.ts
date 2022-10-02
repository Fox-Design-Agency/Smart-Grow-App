import type { IMember } from './member';

export interface ICreateMemberResponse {
	id: string;
}

export interface IDeleteMemberResponse {
	id: string;
}

export interface IEditMemberResponse {
	member: IMember;
}

export interface IGetMemberResponse {
	member: IMember;
}

export interface IGetAllMemberResponse {
	members: IMember[];
}
