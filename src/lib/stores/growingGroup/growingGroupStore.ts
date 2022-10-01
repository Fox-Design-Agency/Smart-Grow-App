import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IGrowingGroup } from '$lib/interfaces/growingGroup/growingGroup';
import type { ICreateGrowingGroupRequest } from '$lib/interfaces/growingGroup/growingGroupRequests';
import type { ICreateGrowingGroupResponse } from '$lib/interfaces/growingGroup/growingGroupResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentGrowingGroup = writable<IGrowingGroup>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateGrowingGroup(
	req: ICreateGrowingGroupRequest
): Promise<ICreateGrowingGroupResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING GROUP REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-group`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateGrowingGroupResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING GROUP RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING GROUP ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateGrowingGroup
