import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IMember } from '$lib/interfaces/member/member';
import type { ICreateMemberRequest } from '$lib/interfaces/member/memberRequests';
import type { ICreateMemberResponse } from '$lib/interfaces/member/memberResponses';

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
