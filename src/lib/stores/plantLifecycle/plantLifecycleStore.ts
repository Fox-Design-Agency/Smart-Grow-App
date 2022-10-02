import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IPlantLifecycle } from '$lib/interfaces/plantLifecycle/plantLifecycle';
import type {
	ICreatePlantLifecycleRequest,
	IEditPlantLifecycleRequest
} from '$lib/interfaces/plantLifecycle/plantLifecycleRequests';
import type {
	ICreatePlantLifecycleResponse,
	IDeletePlantLifecycleResponse,
	IEditPlantLifecycleResponse,
	IGetAllPlantLifecycleResponse,
	IGetPlantLifecycleResponse
} from '$lib/interfaces/plantLifecycle/plantLifecycleResponses';

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

export async function DeletePlantLifecycle(
	id: string
): Promise<IDeletePlantLifecycleResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant-lifecycle/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeletePlantLifecycleResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE PLANT LIFECYCLE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE PLANT LIFECYCLE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeletePlantLifecycle

export async function EditPlantLifecycle(
	req: IEditPlantLifecycleRequest
): Promise<IEditPlantLifecycleResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT LIFECYCLE REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/plant-lifecycle`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditPlantLifecycleResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT LIFECYCLE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT LIFECYCLE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditPlantLifecycle

export async function GetPlantLifecycle(id: string): Promise<IGetPlantLifecycleResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant-lifecycle/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetPlantLifecycleResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET PLANT LIFECYCLE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET PLANT LIFECYCLE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetPlantLifecycle

export async function GetAllPlantLifecycles(): Promise<IGetAllPlantLifecycleResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant-lifecycles`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllPlantLifecycleResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL PLANT LIFECYCLE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL PLANT LIFECYCLE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllPlantLifecycles
