import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { TodolistModel } from '../../models/todolist.model'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	todolist: TodolistModel;
	// todolistmodel: TodolistModel; 
	todolists: Array<TodolistModel> = []; 
	// TodolistModel = new TodolistModel; 


  constructor(
  	public navCtrl: NavController,
  	private alertCtrl: AlertController
  ) { }

addChecklist(): void {
		let prompt = this.alertCtrl.create({
			title: 'New Checklist',
			message: 'Enter the name of your new checklist below:',
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
						this.todolist = data; 
						// console.log(data);
						// this.todolist = data;
						// this.todolists.push(this.todolist);
						// let name = data.name; 
						// this.todolists.push(TodolistModel(name));
						// let todolistmodel = new TodolistModel("hello");

						// let newTodolist = this.todolistmodel(data.name)
						// this.todolists.push( 
						// console.log(data.name, []);
						// let newTodolist = data.name,  ; 
						// this.todolists.push(newTodolist);
						console.log(this.todolist); 

						}
					}
				]



					// this.save(); 
					// }
				// } 
			// ]
		});

		prompt.present(); }

}


