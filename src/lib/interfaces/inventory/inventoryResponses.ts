import type { IInventory } from './inventory';

export interface ICreateInventoryResponse {
	id: string;
}

export interface IDeleteInventoryResponse {
	id: string;
}

export interface IEditInventoryResponse {
	inventory: IInventory;
}

export interface IGetInventoryResponse {
	inventory: IInventory;
}

export interface IGetAllInventoryResponse {
	inventories: IInventory[];
}
