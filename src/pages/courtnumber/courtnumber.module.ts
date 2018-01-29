import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourtnumberPage } from './courtnumber';


@NgModule({
  declarations: [
    CourtnumberPage,
  ],
  imports: [
    IonicPageModule.forChild(CourtnumberPage),
  ],
})
export class CourtnumberPageModule {}
