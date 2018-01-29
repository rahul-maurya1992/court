import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartynamePage } from './partyname';


@NgModule({
  declarations: [
    PartynamePage,
  ],
  imports: [
    IonicPageModule.forChild(PartynamePage),
  ],
})
export class PartynamePageModule {}
