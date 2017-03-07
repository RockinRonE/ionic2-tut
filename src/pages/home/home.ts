import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { TodolistModel } from '../../models/todolist.model'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	todolist: TodolistModel = new TodolistModel(); 
	todolists: Array<TodolistModel> = []; 


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
						this.todolists.push(Object.assign(new TodolistModel(), data));
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


