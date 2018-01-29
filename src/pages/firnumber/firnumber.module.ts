import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirnumberPage } from './firnumber';


@NgModule({
  declarations: [
    FirnumberPage,
  ],
  imports: [
    IonicPageModule.forChild(FirnumberPage),
  ],
})
export class FirnumberPageModule {}
