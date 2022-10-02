import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IMember } from '$lib/interfaces/member/member';
import type {
	ICreateMemberRequest,
	IEditMemberRequest
} from '$lib/interfaces/member/memberRequests';
import type {
	ICreateMemberResponse,
	IEditMemberResponse,
	IGetAllMemberResponse,
	IGetMemberResponse
} from '$lib/interfaces/member/memberResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentMember = writable<IMember>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateMember(
	req: ICreateMemberRequest
): Promise<ICreateMemberResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE MEMBER REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/member`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateMemberResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE MEMBER RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE MEMBER ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateMember

export async function DeleteMember(id: string): Promise<ICreateMemberResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/member/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: ICreateMemberResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE MEMBER RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE MEMBER ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteMember

export async function EditMember(req: IEditMemberRequest): Promise<IEditMemberResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT MEMBER REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/member`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditMemberResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT MEMBER RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT MEMBER ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditMember

export async function GetMember(id: string): Promise<IGetMemberResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/member/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetMemberResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET MEMBER RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET MEMBER ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetMember

export async function GetAllMembers(): Promise<IGetAllMemberResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/members`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllMemberResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL MEMBER RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL MEMBER ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllMembers
