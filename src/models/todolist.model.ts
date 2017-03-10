import { ItemModel } from './item.model';

export class TodolistModel {
	name: string;
	todos: Array<ItemModel> = []; 
}