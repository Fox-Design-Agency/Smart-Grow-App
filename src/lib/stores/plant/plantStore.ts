import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IPlant } from '$lib/interfaces/plant/plant';
import type { ICreatePlantRequest } from '$lib/interfaces/plant/plantRequests';
import type { ICreatePlantResponse } from '$lib/interfaces/plant/plantResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentPlant = writable<IPlant>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreatePlant(req: ICreatePlantRequest): Promise<ICreatePlantResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/plant`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreatePlantResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreatePlant
