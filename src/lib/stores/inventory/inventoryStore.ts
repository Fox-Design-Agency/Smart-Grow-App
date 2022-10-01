import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';

import { writable } from 'svelte/store';
import type { IInventory } from '$lib/interfaces/inventory/inventory';
import type { ICreateInventoryRequest } from '$lib/interfaces/inventory/inventoryRequests';
import type { ICreateInventoryResponse } from '$lib/interfaces/inventory/inventoryResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentInventory = writable<IInventory>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateInventory(
	req: ICreateInventoryRequest
): Promise<ICreateInventoryResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE INVENTORY REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/inventory`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateInventoryResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE INVENTORY RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE INVENTORY ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateInventory
