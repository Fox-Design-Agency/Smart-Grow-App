import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import type { IGrowSpot } from '$lib/interfaces/growSpot/growSpot';
import type { ICreateGrowSpotRequest } from '$lib/interfaces/growSpot/growSpotRequests';
import type { ICreateGrowSpotResponse } from '$lib/interfaces/growSpot/growSpotResponses';
import { writable } from 'svelte/store';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentGrowSpot = writable<IGrowSpot>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateGrowSpot(
	req: ICreateGrowSpotRequest
): Promise<ICreateGrowSpotResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROW SPOT REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/grow-spot`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateGrowSpotResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROW SPOT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROW SPOT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateGrowSpot
