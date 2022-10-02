import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { ITask } from '$lib/interfaces/task/task';
import type { ICreateTaskRequest, IEditTaskRequest } from '$lib/interfaces/task/taskRequests';
import type {
	ICreateTaskResponse,
	IDeleteTaskResponse,
	IEditTaskResponse,
	IGetAllTaskResponse,
	IGetTaskResponse
} from '$lib/interfaces/task/taskResponse';

/**
 *
 *  DEFINE STORE VARIABLES HERE
 *
 * */

export const CurrentTask = writable<ITask>(undefined);

/**
 *
 *  START SERVICE FUNCTIONS
 *
 * */

export async function CreateTask(req: ICreateTaskRequest): Promise<ICreateTaskResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE TASK REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/task`;
		const res = await fetch(URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: ICreateTaskResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE TASK RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('CREATE TASK ERROR');
			console.log(err);
		}
		return null;
	}
} // end of CreateTask

export async function DeleteTask(id: string): Promise<IDeleteTaskResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/task/${id}`;
		const res = await fetch(URL, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IDeleteTaskResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE TASK RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('DELETE TASK ERROR');
			console.log(err);
		}
		return null;
	}
} // end of DeleteTask

export async function EditTask(req: IEditTaskRequest): Promise<IEditTaskResponse | null> {
	try {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT TASK REQUEST');
			console.log(req);
		}

		const URL = `${PUBLIC_API_URL}/task`;
		const res = await fetch(URL, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(req)
		});
		const data: IEditTaskResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT TASK RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('EDIT TASK ERROR');
			console.log(err);
		}
		return null;
	}
} // end of EditTask

export async function GetTask(id: string): Promise<IGetTaskResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/task/${id}`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetTaskResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET TASK RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET TASK ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetTask

export async function GetAllTasks(): Promise<IGetAllTaskResponse | null> {
	try {
		const URL = `${PUBLIC_API_URL}/tasks`;
		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		const data: IGetAllTaskResponse = await res.json();
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL TASK RESPONSE');
			console.log(data);
		}

		return data;
	} catch (err) {
		if (PUBLIC_ENVIRONMENT === 'local') {
			console.log('GET ALL TASK ERROR');
			console.log(err);
		}
		return null;
	}
} // end of GetAllTasks
