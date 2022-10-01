import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';

import { writable } from 'svelte/store';
import type { IGrowingLocation } from '$lib/interfaces/growingLocation/growingLocation';
import type { ICreateGrowingLocationRequest } from '$lib/interfaces/growingLocation/growingLocationRequests';
import type { ICreateGrowingLocationResponse } from '$lib/interfaces/growingLocation/growingLocationResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentGrowingLocation = writable<IGrowingLocation>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateGrowingLocation(
	req: ICreateGrowingLocationRequest
): Promise<ICreateGrowingLocationResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LOCATION REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-location`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateGrowingLocationResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LOCATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LOCATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateGrowingLocation
