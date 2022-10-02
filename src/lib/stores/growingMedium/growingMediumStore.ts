import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import type { IGrowingMedium } from '$lib/interfaces/growingMedium/growingMedium';
import type {
	ICreateGrowingMediumRequest,
	IEditGrowingMediumRequest
} from '$lib/interfaces/growingMedium/growingMediumRequests';
import type {
	ICreateGrowingMediumResponse,
	IDeleteGrowingMediumResponse,
	IEditGrowingMediumResponse,
	IGetAllGrowingMediumResponse,
	IGetGrowingMediumResponse
} from '$lib/interfaces/growingMedium/growingMediumResponse';

import { writable } from 'svelte/store';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentGrowingMedium = writable<IGrowingMedium>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateGrowingMedium(
	req: ICreateGrowingMediumRequest
): Promise<ICreateGrowingMediumResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING MEDIUM REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-medium`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateGrowingMediumResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING MEDIUM RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING MEDIUM ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateGrowingMedium

export async function DeleteGrowingMedium(
	id: string
): Promise<IDeleteGrowingMediumResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-medium/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteGrowingMediumResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROWING MEDIUM RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROWING MEDIUM ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteGrowingMedium

export async function EditGrowingMedium(
	req: IEditGrowingMediumRequest
): Promise<IEditGrowingMediumResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING MEDIUM REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-medium`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditGrowingMediumResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING MEDIUM RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING MEDIUM ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditGrowingMedium

export async function GetGrowingMedium(id: string): Promise<IGetGrowingMediumResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-medium/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetGrowingMediumResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROWING MEDIUM RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROWING MEDIUM ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetGrowingMedium

export async function GetAllGrowingMediums(): Promise<IGetAllGrowingMediumResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-mediums`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllGrowingMediumResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET All GROWING MEDIUM RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET All GROWING MEDIUM ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllGrowingMediums
