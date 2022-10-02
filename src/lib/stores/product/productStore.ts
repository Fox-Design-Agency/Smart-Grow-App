import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { IProduct } from '$lib/interfaces/product/product';
import type {
	ICreateProductRequest,
	IEditProductRequest
} from '$lib/interfaces/product/productRequests';
import type {
	ICreateProductResponse,
	IDeleteProductResponse,
	IEditProductResponse,
	IGetAllProductResponse,
	IGetProductResponse
} from '$lib/interfaces/product/productResponses';

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

export async function DeleteProduct(id: string): Promise<IDeleteProductResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/product/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteProductResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE PRODUCT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE PRODUCT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteProduct

export async function EditProduct(req: IEditProductRequest): Promise<IEditProductResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PRODUCT REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/product`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditProductResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PRODUCT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT PRODUCT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditProduct

export async function GetProduct(id: string): Promise<IGetProductResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/product/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetProductResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET PRODUCT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET PRODUCT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetProduct

export async function GetAllProducts(): Promise<IGetAllProductResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/products`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllProductResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL PRODUCT RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL PRODUCT ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllProducts
