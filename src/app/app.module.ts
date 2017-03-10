import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/item/item'; 

import { Storage } from '@ionic/storage'; 
import { Data } from '../providers/data'; 



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data, Storage]
})
export class AppModule {}
