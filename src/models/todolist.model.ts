import { TodoModel } from './todo.model';

export class TodolistModel {
	name: string;
	todos: Array<TodoModel> = []; 
}