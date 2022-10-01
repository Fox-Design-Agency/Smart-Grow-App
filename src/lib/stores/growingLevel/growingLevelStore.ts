import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IGrowingLevel } from '$lib/interfaces/growingLevel/growingLevel';
import type { ICreateGrowingLevelRequest } from '$lib/interfaces/growingLevel/growingLevelRequests';
import type { ICreateGrowingLevelResponse } from '$lib/interfaces/growingLevel/growingLevelResponse';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentGrowingLevel = writable<IGrowingLevel>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateGrowingLevel(
	req: ICreateGrowingLevelRequest
): Promise<ICreateGrowingLevelResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LEVEL REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-level`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateGrowingLevelResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LEVEL RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LEVEL ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateGrowingLevel
