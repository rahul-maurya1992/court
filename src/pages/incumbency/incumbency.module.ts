import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncumbencyPage } from './incumbency';

@NgModule({
  declarations: [
    IncumbencyPage,
  ],
  imports: [
    IonicPageModule.forChild(IncumbencyPage),
  ],
})
export class IncumbencyPageModule {}
