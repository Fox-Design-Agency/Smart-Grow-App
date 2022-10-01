import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IPlantLifecycle } from '$lib/interfaces/plantLifecycle/plantLifecycle';
import type { ICreatePlantLifecycleRequest } from '$lib/interfaces/plantLifecycle/plantLifecycleRequests';
import type { ICreatePlantLifecycleResponse } from '$lib/interfaces/plantLifecycle/plantLifecycleResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentPlantLifecycle = writable<IPlantLifecycle>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreatePlantLifecycle(
	req: ICreatePlantLifecycleRequest
): Promise<ICreatePlantLifecycleResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT LIFECYCLE REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/plant-lifecycle`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreatePlantLifecycleResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT LIFECYCLE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT LIFECYCLE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreatePlantLifecycle
