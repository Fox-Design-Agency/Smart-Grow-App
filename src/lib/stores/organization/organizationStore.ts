import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IOrganization } from '$lib/interfaces/organization/organization';
import type {
	ICreateOrganizationRequest,
	IEditOrganizationRequest
} from '$lib/interfaces/organization/organizationRequests';
import type {
	ICreateOrganizationResponse,
	IDeleteOrganizationResponse,
	IEditOrganizationResponse,
	IGetAllOrganizationResponse,
	IGetOrganizationResponse
} from '$lib/interfaces/organization/organizationResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentOrganization = writable<IOrganization>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateOrganization(
	req: ICreateOrganizationRequest
): Promise<ICreateOrganizationResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE ORGANIZATION REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/organization`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateOrganizationResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE ORGANIZATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE ORGANIZATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateOrganization

export async function DeleteOrganization(id: string): Promise<IDeleteOrganizationResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/organization/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteOrganizationResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE ORGANIZATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE ORGANIZATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteOrganization

export async function EditOrganization(
	req: IEditOrganizationRequest
): Promise<IEditOrganizationResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT ORGANIZATION REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/organization`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditOrganizationResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT ORGANIZATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT ORGANIZATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditOrganization

export async function GetOrganization(id: string): Promise<IGetOrganizationResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/organization/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetOrganizationResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ORGANIZATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ORGANIZATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetOrganization

export async function GetAllOrganizations(): Promise<IGetAllOrganizationResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/organizations`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllOrganizationResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL ORGANIZATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL ORGANIZATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllOrganizations
