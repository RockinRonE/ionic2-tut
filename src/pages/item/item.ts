import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
// importing model for strongtyping
import { TodolistModel } from '../../models/todolist.model';
import { ItemModel } from '../../models/item.model'



@Component({
  selector: 'items-page',
  templateUrl: 'item.html'
})
export class ItemsPage {
	todolist: TodolistModel;

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

							let items = Object.assign(new ItemModel(), data);

							this.todolist.todos.push(items);
							console.log(this.todolist);
						}
					}
				]
		});

		prompt.present(); 
	}

	renameItem(item): void {
		let prompt = this.alertCtrl.create({
			title: 'Rename This item',
			message: 'Enter the new name of this item:',
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
						let index = this.todolist.todos.indexOf(item);

						if(index > -1) {
							this.todolist.todos[index].name = data.name; 
						}
					}
				}
			]

		});

		prompt.present(); 
	}

	deleteItem(item): void {
		let index = this.todolist.todos.indexOf(item); 

		if(index > -1) {
			this.todolist.todos.splice(index, 1); 
		}
	}





}
