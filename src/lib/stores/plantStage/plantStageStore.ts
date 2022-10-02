import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IPlantStage } from '$lib/interfaces/plantStage/plantstage';
import type {
	ICreatePlantStageRequest,
	IEditPlantStageRequest
} from '$lib/interfaces/plantStage/plantStageRequests';
import type {
	ICreatePlantStageResponse,
	IDeletePlantStageResponse,
	IEditPlantStageResponse,
	IGetAllPlantStageResponse,
	IGetPlantStageResponse
} from '$lib/interfaces/plantStage/plantStageResponses';

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

export async function DeletePlantStage(id: string): Promise<IDeletePlantStageResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant-stage/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeletePlantStageResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE PLANT STAGE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE PLANT STAGE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeletePlantStage

export async function EditPlantStage(
	req: IEditPlantStageRequest
): Promise<IEditPlantStageResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT STAGE REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/plant-stage`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditPlantStageResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT STAGE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT STAGE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditPlantStage

export async function GetPlantStage(id: string): Promise<IGetPlantStageResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant-stage/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetPlantStageResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET PLANT STAGE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET PLANT STAGE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetPlantStage

export async function GetAllPlantStages(): Promise<IGetAllPlantStageResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant-stages`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllPlantStageResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL PLANT STAGE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL PLANT STAGE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllPlantStages
