import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IGrowingGroup } from '$lib/interfaces/growingGroup/growingGroup';
import type {
	ICreateGrowingGroupRequest,
	IEditGrowingGroupRequest
} from '$lib/interfaces/growingGroup/growingGroupRequests';
import type {
	ICreateGrowingGroupResponse,
	IDeleteGrowingGroupResponse,
	IEditGrowingGroupResponse,
	IGetAllGrowingGroupResponse,
	IGetGrowingGroupResponse
} from '$lib/interfaces/growingGroup/growingGroupResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentGrowingGroup = writable<IGrowingGroup>(undefined);

/*
 *
 *  START SERVICE FUNCTIONS
 *
 * */

/**
 * Creates a growing group.
 * @param req ICreateGrowingGroupRequest
 * @returns ICreateGrowingGroupResponse
 */
export async function CreateGrowingGroup(
	req: ICreateGrowingGroupRequest
): Promise<ICreateGrowingGroupResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING GROUP REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-group`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateGrowingGroupResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING GROUP RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE GROWING GROUP ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateGrowingGroup

export async function DeleteGrowingGroup(id: string): Promise<IDeleteGrowingGroupResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-group/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteGrowingGroupResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROWING GROUP RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE GROWING GROUP ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteGrowingGroup

export async function EditGrowingGroup(
	req: IEditGrowingGroupRequest
): Promise<IEditGrowingGroupResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING GROUP REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/growing-group`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditGrowingGroupResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING GROUP RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT GROWING GROUP ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditGrowingGroup

export async function GetGrowingGroup(id: string): Promise<IGetGrowingGroupResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-group/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetGrowingGroupResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROWING GROUP RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET GROWING GROUP ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetGrowingGroup

export async function GetAllGrowingGroups(): Promise<IGetAllGrowingGroupResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/growing-groups`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllGrowingGroupResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL GROWING GROUP RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL GROWING GROUP ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllGrowingGroups
