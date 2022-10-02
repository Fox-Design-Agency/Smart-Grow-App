import type { ITask } from './task';

export interface ICreateTaskResponse {
	id: string;
}

export interface IDeleteTaskResponse {
	id: string;
}

export interface IEditTaskResponse {
	task: ITask;
}

export interface IGetTaskResponse {
	task: ITask;
}

export interface IGetAllTaskResponse {
	tasks: ITask[];
}
