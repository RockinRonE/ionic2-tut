import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { TodolistModel } from '../../models/todolist.model'; 
import { ItemsPage } from '../item/item';

// Import data
import { Data } from '../../providers/data'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	todolists: Array<TodolistModel> = [];  


  constructor(
  	public navCtrl: NavController,
  	private alertCtrl: AlertController,
  	private dataService: Data
  ) { 
  	this.dataService.getData().then(todolists => {
  		console.log(todolists); 
  		let savedTodolists = JSON.parse(todolists); 
  		console.log(savedTodolists);
  		this.todolists.push(Object.assign(new TodolistModel(), savedTodolists)); 
			console.log(this.todolists); 
  		// // if(savedTodolists) { 
	  	// // 	savedTodolists.forEach(todolist => {
				// // 	let todolistObject = Object.assign(new TodolistModel(), todolist); 
		  // // 		this.todolists.push(todolistObject);
	  	// // 	})
	  	// }
  	})
  }

	addTodolist(): void {
		let prompt = this.alertCtrl.create({
			title: 'New Todolist',
			message: 'Enter the name of your new todolist:',
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
							// console.log(this.todolists);
							// this.dataService.save(this.todolists);
							this.save(); 
						}
					}
				]
		});
		
		prompt.present(); 
	}

	renameTodolist(todolist): void {
		let prompt = this.alertCtrl.create({
			title: 'Rename Todolist',
			message: 'Enter the new name of the todolist:',
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
						let index = this.todolists.indexOf(todolist);

						if(index > -1) {
							this.todolists[index].name = data.name; 
						}
					}
				}
			]

		});

		prompt.present(); 
	}

	deleteTodolist(todolist): void {
		let index = this.todolists.indexOf(todolist);

		if(index > -1) {
			this.todolists.splice(index, 1);
		}
	}

	viewTodolist(todolist): void {
		this.navCtrl.push(ItemsPage, {
			todolist: todolist
		});
	}

	save(): void {
		this.dataService.save(this.todolists);
	}



}



























