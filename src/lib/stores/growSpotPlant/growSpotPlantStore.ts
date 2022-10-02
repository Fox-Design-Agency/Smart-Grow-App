import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import type { IGrowSpotPlant } from '$lib/interfaces/growSpotPlant/growSpotPlant';
import type {
	ICreateGrowSpotPlantRequest,
	IEditGrowSpotPlantRequest
} from '$lib/interfaces/growSpotPlant/growSpotPlantRequests';
import type {
	ICreateGrowSpotPlantResponse,
	IDeleteGrowSpotPlantResponse,
	IEditGrowSpotPlantResponse,
	IGetAllGrowSpotPlantResponse,
	IGetGrowSpotPlantResponse
} from '$lib/interfaces/growSpotPlant/growSpotPlantResponses';
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

export async function DeleteGrowSpotPlant(
	id: string
): Promise<IDeleteGrowSpotPlantResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/grow-spot-plant/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteGrowSpotPlantResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROW SPOT PLANT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROW SPOT PLANT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteGrowSpotPlant

export async function EditGrowSpotPlant(
	req: IEditGrowSpotPlantRequest
): Promise<IEditGrowSpotPlantResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROW SPOT PLANT REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/grow-spot-plant`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditGrowSpotPlantResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROW SPOT PLANT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROW SPOT PLANT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditGrowSpotPlant

export async function GetGrowSpotPlant(id: string): Promise<IGetGrowSpotPlantResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/grow-spot-plant/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetGrowSpotPlantResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROW SPOT PLANT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROW SPOT PLANT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetGrowSpotPlant

export async function GetAllGrowSpotPlant(): Promise<IGetAllGrowSpotPlantResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/grow-spot-plants`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllGrowSpotPlantResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL GROW SPOT PLANT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL GROW SPOT PLANT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllGrowSpotPlant
