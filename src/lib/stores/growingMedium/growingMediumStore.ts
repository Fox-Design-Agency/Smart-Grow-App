import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import type { IGrowingMedium } from '$lib/interfaces/growingMedium/growingMedium';
import type { ICreateGrowingMediumRequest } from '$lib/interfaces/growingMedium/growingMediumRequests';
import type { ICreateGrowingMediumResponse } from '$lib/interfaces/growingMedium/growingMediumResponse';

import { writable } from 'svelte/store';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentGrowingMedium = writable<IGrowingMedium>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateGrowingMedium(
	req: ICreateGrowingMediumRequest
): Promise<ICreateGrowingMediumResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING MEDIUM REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/device`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateGrowingMediumResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING MEDIUM RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING MEDIUM ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateGrowingMedium
