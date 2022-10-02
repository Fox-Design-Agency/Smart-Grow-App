import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { INutrient } from '$lib/interfaces/nutrient/nutrient';
import type {
	ICreateNutrientRequest,
	IEditNutrientRequest
} from '$lib/interfaces/nutrient/nutrientRequests';
import type {
	ICreateNutrientResponse,
	IDeleteNutrientResponse,
	IEditNutrientResponse,
	IGetAllNutrientResponse,
	IGetNutrientResponse
} from '$lib/interfaces/nutrient/nutrientResponses';

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

export async function DeleteNutrient(id: string): Promise<IDeleteNutrientResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/nutrient/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteNutrientResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE NUTRIENT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE NUTRIENT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteNutrient

export async function EditNutrient(
	req: IEditNutrientRequest
): Promise<IEditNutrientResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT NUTRIENT REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/nutrient`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditNutrientResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT NUTRIENT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT NUTRIENT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditNutrient

export async function GetNutrient(id: string): Promise<IGetNutrientResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/nutrient/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetNutrientResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET NUTRIENT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET NUTRIENT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetNutrient

export async function GetAllNutrients(): Promise<IGetAllNutrientResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/nutrients`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllNutrientResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL NUTRIENT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL NUTRIENT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllNutrients
