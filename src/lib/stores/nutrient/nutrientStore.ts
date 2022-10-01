import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { INutrient } from '$lib/interfaces/nutrient/nutrient';
import type { ICreateNutrientRequest } from '$lib/interfaces/nutrient/nutrientRequests';
import type { ICreateNutrientResponse } from '$lib/interfaces/nutrient/nutrientResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentNutrient = writable<INutrient>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateNutrient(
	req: ICreateNutrientRequest
): Promise<ICreateNutrientResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE NUTRIENT REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/nutrient`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateNutrientResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE NUTRIENT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE NUTRIENT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateNutrient
