import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IDevice } from '$lib/interfaces/device/device';
import type { ICreateDeviceActionRequest } from '$lib/interfaces/device/deviceActionRequests';
import type { ICreateDeviceActionResponse } from '$lib/interfaces/device/deviceActionResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentDevice = writable<IDevice>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateDeviceAction(
	req: ICreateDeviceActionRequest
): Promise<ICreateDeviceActionResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE DEVICE ACTION REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/device-action`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateDeviceActionResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE DEVICE ACTION RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE DEVICE ACTION ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateDeviceAction
