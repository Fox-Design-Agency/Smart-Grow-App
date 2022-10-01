import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IPlantCategory } from '$lib/interfaces/plantCategory/plantCategory';
import type { ICreatePlantCategoryRequest } from '$lib/interfaces/plantCategory/plantCategoryRequests';
import type { ICreatePlantCategoryResponse } from '$lib/interfaces/plantCategory/plantCategoryResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentPlantCategory = writable<IPlantCategory>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreatePlantCategory(
	req: ICreatePlantCategoryRequest
): Promise<ICreatePlantCategoryResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT CATEGORY REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/plant-category`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreatePlantCategoryResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT CATEGORY RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT CATEGORY ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreatePlantCategory
