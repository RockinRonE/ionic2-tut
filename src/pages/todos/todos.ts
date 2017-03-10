import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
// importing model for strongtyping
import { TodolistModel } from '../../models/todolist.model';
import { TodoModel } from '../../models/todo.model'



@Component({
  selector: 'todos-page',
  templateUrl: 'todos.html'
})
export class TodosPage {
	todolist: TodolistModel;  

	todo: TodoModel; 
	todosArray: Array<TodoModel> = []; 

  constructor(
  	public navCtrl: NavController, 
  	private navParams: NavParams,
  	private alertCtrl: AlertController
  ) {
  	 this.todolist = navParams.get('todolist'); 
  }

  addTodo(): void {
		let prompt = this.alertCtrl.create({
			title: 'Add a Todo',
			message: 'Enter the name of your todo:',
			inputs: [ 
					{
						name: 'name' 
					}
				], 
			buttons: [
					{
						text: 'Cancel'
					}, 
					{
						text: 'Save', 
						handler: data => {

							let todos = Object.assign(new TodoModel(), data);
						// console.log(todos); 
							this.todolist.todos.push(todos); 
							// console.log(this.todolist); 
							this.todosArray.push(data.name);
							console.log(this.todosArray);
							// console.log(this.todolist); 
							// this.todos.push(Object.assign(new TodoModel(), data));
							// console.log(this.todos);
							// let {name} = data; 
							// this.todolist.todos.push({name, checked: false}); 
							// console.log(this.todolist); 
							// let testArray = Array.from(data.name); 
							// console.log(testArray);
							// let items = this.todolist.todos; 
							// this.todos;

						}
					}
				]
		});

		prompt.present(); 
	}

	renameTodo(todo): void {
		let prompt = this.alertCtrl.create({
			title: 'Rename This Todo',
			message: 'Enter the new name of this todo:',
			inputs: [
				{
					name: 'name'
				}
			],
			buttons: [
				{
					text: 'Cancel'
				},
				{
					text: 'Save',
					handler: data => {
						let index = this.todosArray.indexOf(todo);

						if(index > -1) {
							this.todosArray[index].name = data.name; 
						}
					}
				}
			]

		});

		prompt.present(); 
	}

	deleteTodo(todo): void {
		let index = this.todosArray.indexOf(todo);

		if(index > -1) {
			this.todosArray.splice(index, 1); 
		}
	}





}
