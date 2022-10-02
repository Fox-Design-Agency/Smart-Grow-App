import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IGrowingLevel } from '$lib/interfaces/growingLevel/growingLevel';
import type {
	ICreateGrowingLevelRequest,
	IEditGrowingLevelRequest
} from '$lib/interfaces/growingLevel/growingLevelRequests';
import type {
	ICreateGrowingLevelResponse,
	IDeleteGrowingLevelResponse,
	IEditGrowingLevelResponse,
	IGetAllGrowingLevelResponse,
	IGetGrowingLevelResponse
} from '$lib/interfaces/growingLevel/growingLevelResponse';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentGrowingLevel = writable<IGrowingLevel>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateGrowingLevel(
	req: ICreateGrowingLevelRequest
): Promise<ICreateGrowingLevelResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LEVEL REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-level`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateGrowingLevelResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LEVEL RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING LEVEL ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateGrowingLevel

export async function DeleteGrowingLevel(id: string): Promise<IDeleteGrowingLevelResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-level/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteGrowingLevelResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROWING LEVEL RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROWING LEVEL ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteGrowingLevel

export async function EditGrowingLevel(
	req: IEditGrowingLevelRequest
): Promise<IEditGrowingLevelResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING LEVEL REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-level`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditGrowingLevelResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING LEVEL RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING LEVEL ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditGrowingLevel

export async function GetGrowingLevel(id: string): Promise<IGetGrowingLevelResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-level/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetGrowingLevelResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROWING LEVEL RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROWING LEVEL ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetGrowingLevel

export async function GetAllGrowingLevels(): Promise<IGetAllGrowingLevelResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-levels`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllGrowingLevelResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL GROWING LEVEL RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL GROWING LEVEL ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllGrowingLevels
