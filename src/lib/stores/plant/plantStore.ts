import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IPlant } from '$lib/interfaces/plant/plant';
import type { ICreatePlantRequest, IEditPlantRequest } from '$lib/interfaces/plant/plantRequests';
import type {
	ICreatePlantResponse,
	IDeletePlantResponse,
	IEditPlantResponse,
	IGetAllPlantResponse,
	IGetPlantResponse
} from '$lib/interfaces/plant/plantResponses';

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

export async function DeletePlant(id: string): Promise<IDeletePlantResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeletePlantResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE PLANT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE PLANT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeletePlant

export async function EditPlant(req: IEditPlantRequest): Promise<IEditPlantResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/plant`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditPlantResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditPlant

export async function GetPlant(id: string): Promise<IGetPlantResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetPlantResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET PLANT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET PLANT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetPlant

export async function GetAllPlants(): Promise<IGetAllPlantResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plants`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllPlantResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL PLANT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL PLANT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllPlants
