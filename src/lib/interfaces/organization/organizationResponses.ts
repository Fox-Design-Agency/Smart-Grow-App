import type { IOrganization } from './organization';

export interface ICreateOrganizationResponse {
	id: string;
}

export interface IDeleteOrganizationResponse {
	id: string;
}

export interface IEditOrganizationResponse {
	organization: IOrganization;
}

export interface IGetOrganizationResponse {
	organization: IOrganization;
}

export interface IGetAllOrganizationResponse {
	organizations: IOrganization[];
}
