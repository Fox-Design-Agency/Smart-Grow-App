import { PUBLIC_API_URL, PUBLIC_ENVIRONMENT } from '$env/static/public';
import { writable } from 'svelte/store';
import type { ITask } from '$lib/interfaces/task/task';
import type { ICreateTaskRequest } from '$lib/interfaces/task/taskRequests';
import type { ICreateTaskResponse } from '$lib/interfaces/task/taskResponse';

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
