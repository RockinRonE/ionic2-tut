import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { TodolistModel } from '../../models/todolist.model'; 

@Component({
  selector: 'todos-page',
  templateUrl: 'todos.html'
})
export class TodosPage {
	todolist: TodolistModel[];

  constructor(
  	private alertCtrl: AlertController, 
  	public navCtrl: NavController, 
  	public navParams: NavParams
  ) {}

  

}
