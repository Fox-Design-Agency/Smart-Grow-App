import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IPlantCategory } from '$lib/interfaces/plantCategory/plantCategory';
import type {
	ICreatePlantCategoryRequest,
	IEditPlantCategoryRequest
} from '$lib/interfaces/plantCategory/plantCategoryRequests';
import type {
	ICreatePlantCategoryResponse,
	IDeletePlantCategoryResponse,
	IEditPlantCategoryResponse,
	IGetAllPlantCategoryResponse,
	IGetPlantCategoryResponse
} from '$lib/interfaces/plantCategory/plantCategoryResponses';

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

export async function DeletePlantCategory(
	id: string
): Promise<IDeletePlantCategoryResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant-category/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeletePlantCategoryResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE PLANT CATEGORY RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE PLANT CATEGORY ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeletePlantCategory

export async function EditPlantCategory(
	req: IEditPlantCategoryRequest
): Promise<IEditPlantCategoryResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT CATEGORY REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/plant-category`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditPlantCategoryResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT CATEGORY RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PLANT CATEGORY ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditPlantCategory

export async function GetPlantCategory(id: string): Promise<IGetPlantCategoryResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant-category/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetPlantCategoryResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET PLANT CATEGORY RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET PLANT CATEGORY ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetPlantCategory

export async function GetAllPlantCategory(): Promise<IGetAllPlantCategoryResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/plant-categories`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllPlantCategoryResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL PLANT CATEGORY RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL PLANT CATEGORY ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllPlantCategory
