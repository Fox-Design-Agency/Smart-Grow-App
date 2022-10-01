import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IHarvest } from '$lib/interfaces/harvest/harvest';
import type { ICreateHarvestRequest } from '$lib/interfaces/harvest/harvestRequests';
import type { ICreateHarvestResponse } from '$lib/interfaces/harvest/harvestResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentHarvest = writable<IHarvest>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateHarvest(
	req: ICreateHarvestRequest
): Promise<ICreateHarvestResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE HARVEST REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/harvest`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateHarvestResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE HARVEST RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE HARVEST ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateHarvest
