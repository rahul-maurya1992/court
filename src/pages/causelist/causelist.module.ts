import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CauselistPage } from './causelist';


@NgModule({
  declarations: [
    CauselistPage,
  ],
  imports: [
    IonicPageModule.forChild(CauselistPage),
  ],
})
export class CauselistPageModule {}
