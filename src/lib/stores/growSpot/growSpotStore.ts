import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import type { IGrowSpot } from '$lib/interfaces/growSpot/growSpot';
import type {
	ICreateGrowSpotRequest,
	IEditGrowSpotRequest
} from '$lib/interfaces/growSpot/growSpotRequests';
import type {
	ICreateGrowSpotResponse,
	IDeleteGrowSpotResponse,
	IEditGrowSpotResponse,
	IGetAllGrowSpotResponse,
	IGetGrowSpotResponse
} from '$lib/interfaces/growSpot/growSpotResponses';
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

export async function DeleteGrowSpot(id: string): Promise<IDeleteGrowSpotResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/grow-spot/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteGrowSpotResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROW SPOT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROW SPOT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteGrowSpot

export async function EditGrowSpot(
	req: IEditGrowSpotRequest
): Promise<IEditGrowSpotResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROW SPOT REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/grow-spot`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditGrowSpotResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROW SPOT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROW SPOT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditGrowSpot

export async function GetGrowSpot(id: string): Promise<IGetGrowSpotResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/grow-spot/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetGrowSpotResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROW SPOT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROW SPOT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetGrowSpot

export async function GetAllGrowSpots(): Promise<IGetAllGrowSpotResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/grow-spots`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllGrowSpotResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL GROW SPOT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL GROW SPOT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllGrowSpots
