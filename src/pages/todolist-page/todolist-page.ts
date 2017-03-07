import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { TodolistModel } from '../../models/todolist.model'; 

@Component({
  selector: 'todolist-page',
  templateUrl: 'todolist-page.html'
})
export class TodolistPage {
	todolist: TodolistModel[];

  constructor(
  	private alertCtrl: AlertController, 
  	public navCtrl: NavController, 
  	public navParams: NavParams
  ) {}

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
						console.log(data);
						// let newTodolist = new TodolistModel(data.name, []); 
						// this.todolist.push(newTodolist);

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
