import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';

import { writable } from 'svelte/store';
import type { IGrowingLocation } from '$lib/interfaces/growingLocation/growingLocation';
import type {
	ICreateGrowingLocationRequest,
	IEditGrowingLocationRequest
} from '$lib/interfaces/growingLocation/growingLocationRequests';
import type {
	ICreateGrowingLocationResponse,
	IEditGrowingLocationResponse,
	IGetAllGrowingLocationResponse,
	IGetGrowingLocationResponse
} from '$lib/interfaces/growingLocation/growingLocationResponses';
import type { IDeleteGrowingLocationDeviceResponse } from '$lib/interfaces/device/deviceResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentGrowingLocation = writable<IGrowingLocation>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateGrowingLocation(
	req: ICreateGrowingLocationRequest
): Promise<ICreateGrowingLocationResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LOCATION REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-location`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateGrowingLocationResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LOCATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LOCATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateGrowingLocation

export async function DeleteGrowingLocation(
	id: string
): Promise<IDeleteGrowingLocationDeviceResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-location/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteGrowingLocationDeviceResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROWING LOCATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROWING LOCATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteGrowingLocation

export async function EditGrowingLocation(
	req: IEditGrowingLocationRequest
): Promise<IEditGrowingLocationResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING LOCATION REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-location`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditGrowingLocationResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING LOCATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING LOCATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditGrowingLocation

export async function GetGrowingLocation(id: string): Promise<IGetGrowingLocationResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-location/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetGrowingLocationResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROWING LOCATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROWING LOCATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetGrowingLocation

export async function GetAllGrowingLocation(): Promise<IGetAllGrowingLocationResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-locations`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllGrowingLocationResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL GROWING LOCATION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL GROWING LOCATION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllGrowingLocation
