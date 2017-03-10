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
	todolist: TodolistModel = new TodolistModel(); 
	todolists: Array<TodolistModel> = [];  


  constructor(
  	public navCtrl: NavController,
  	private alertCtrl: AlertController,
  	private dataService: Data
  ) { 
  	this.dataService.getData().then(todolists => {
  		// CHECK THIS
  		let savedTodolists: any = false; 

  		if(todolists && typeof(todolists) != 'undefined') {
  			savedTodolists = JSON.parse(todolists);
  			
  		}

  		if(savedTodolists) {
  			console.log(savedTodolists);
  			// savedTodolists.forEach(savedTodolist => {
  				// const {title, items} = savedTodolist; 
  				// console.log(title);
  				// console.log(items);
  				// this.todolists.push(Object.assign(new TodolistModel(), title, items));
  				// console.log(todolists); 

  				// console.log(savedTodolist.title);
  				// this.todolists.push(Object.assign(new TodolistModel(), savedTodolist.title, savedTodolist.items));
  				// console.log(savedTodolist); 
  			// })
  		}
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





}



























