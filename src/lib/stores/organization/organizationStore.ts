import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IOrganization } from '$lib/interfaces/organization/organization';
import type { ICreateOrganizationRequest } from '$lib/interfaces/organization/organizationRequests';
import type { ICreateOrganizationResponse } from '$lib/interfaces/organization/organizationResponses';

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
