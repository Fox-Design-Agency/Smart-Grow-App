import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IPlantStage } from '$lib/interfaces/plantStage/plantstage';
import type { ICreatePlantStageRequest } from '$lib/interfaces/plantStage/plantStageRequests';
import type { ICreatePlantStageResponse } from '$lib/interfaces/plantStage/plantStageResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentPlantStage = writable<IPlantStage>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreatePlantStage(
	req: ICreatePlantStageRequest
): Promise<ICreatePlantStageResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT STAGE REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/plant-stage`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreatePlantStageResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT STAGE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PLANT STAGE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreatePlantStage
