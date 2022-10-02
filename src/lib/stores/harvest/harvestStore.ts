import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IHarvest } from '$lib/interfaces/harvest/harvest';
import type {
	ICreateHarvestRequest,
	IEditHarvestRequest
} from '$lib/interfaces/harvest/harvestRequests';
import type {
	ICreateHarvestResponse,
	IDeleteHarvestResponse,
	IEditHarvestResponse,
	IGetAllHarvestResponse,
	IGetHarvestResponse
} from '$lib/interfaces/harvest/harvestResponses';

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

export async function DeleteHarvest(id: string): Promise<IDeleteHarvestResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/harvest/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteHarvestResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE HARVEST RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE HARVEST ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteHarvest

export async function EditHarvest(req: IEditHarvestRequest): Promise<IEditHarvestResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT HARVEST REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/harvest`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditHarvestResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT HARVEST RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT HARVEST ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditHarvest

export async function GetHarvest(id: string): Promise<IGetHarvestResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/harvest/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetHarvestResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET HARVEST RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET HARVEST ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetHarvest

export async function GetAllHarvests(): Promise<IGetAllHarvestResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/harvests`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllHarvestResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL HARVEST RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL HARVEST ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllHarvests
