import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';

import { writable } from 'svelte/store';
import type { IInventory } from '$lib/interfaces/inventory/inventory';
import type {
	ICreateInventoryRequest,
	IEditInventoryRequest
} from '$lib/interfaces/inventory/inventoryRequests';
import type {
	ICreateInventoryResponse,
	IDeleteInventoryResponse,
	IEditInventoryResponse,
	IGetAllInventoryResponse,
	IGetInventoryResponse
} from '$lib/interfaces/inventory/inventoryResponses';

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

export async function DeleteInventory(id: string): Promise<IDeleteInventoryResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/inventory/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteInventoryResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE INVENTORY RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE INVENTORY ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteInventory

export async function EditInventory(
	req: IEditInventoryRequest
): Promise<IEditInventoryResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT INVENTORY REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/inventory`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditInventoryResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT INVENTORY RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT INVENTORY ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditInventory

export async function GetInventory(id: string): Promise<IGetInventoryResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/inventory/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetInventoryResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET INVENTORY RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET INVENTORY ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetInventory

export async function GetAllInventories(): Promise<IGetAllInventoryResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/inventories`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllInventoryResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL INVENTORY RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL INVENTORY ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllInventories
