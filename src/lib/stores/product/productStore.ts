import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IProduct } from '$lib/interfaces/product/product';
import type { ICreateProductRequest } from '$lib/interfaces/product/productRequests';
import type { ICreateProductResponse } from '$lib/interfaces/product/productResponses';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentProduct = writable<IProduct>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateProduct(
	req: ICreateProductRequest
): Promise<ICreateProductResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PRODUCT REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/product`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateProductResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PRODUCT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE PRODUCT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateProduct
