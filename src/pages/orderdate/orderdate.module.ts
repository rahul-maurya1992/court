import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderdatePage } from './orderdate';


@NgModule({
  declarations: [
    OrderdatePage,
  ],
  imports: [
    IonicPageModule.forChild(OrderdatePage),
  ],
})
export class OrderdatePageModule {}
