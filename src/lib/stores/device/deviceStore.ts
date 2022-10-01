import type { ICreateDeviceRequest } from '$lib/interfaces/device/deviceRequests';
import type { ICreateDeviceResponse } from '$lib/interfaces/device/deviceResponses';

import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';

import { writable } from 'svelte/store';
import type { IDevice } from '$lib/interfaces/device/device';

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

export async function CreateDevice(
	req: ICreateDeviceRequest
): Promise<ICreateDeviceResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE DEVICE REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/device`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateDeviceResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE DEVICE RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE DEVICE ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateDevice
