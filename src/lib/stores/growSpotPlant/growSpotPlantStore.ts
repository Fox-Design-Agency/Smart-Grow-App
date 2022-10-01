import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import type { IGrowSpotPlant } from '$lib/interfaces/growSpotPlant/growSpotPlant';
import type { ICreateGrowSpotPlantRequest } from '$lib/interfaces/growSpotPlant/growSpotPlantRequests';
import type { ICreateGrowSpotPlantResponse } from '$lib/interfaces/growSpotPlant/growSpotPlantResponses';
import { writable } from 'svelte/store';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentGrowSpotPlant = writable<IGrowSpotPlant>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateGrowSpotPlant(
	req: ICreateGrowSpotPlantRequest
): Promise<ICreateGrowSpotPlantResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROW SPOT PLANT REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/grow-spot-plant`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateGrowSpotPlantResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROW SPOT PLANT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROW SPOT PLANT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateGrowSpotPlant
