import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

	constructor(private storage: Storage) { }

	save(data): void {
		let stringData = JSON.stringify(data); 
		this.storage.set('todolists', stringData); 
	}

	// TODO: Sure it's any?
	getData(): Promise<any> {
		return this.storage.get('checklists');
	}

}