import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JudgesPage } from './judges';

@NgModule({
  declarations: [
    JudgesPage,
  ],
  imports: [
    IonicPageModule.forChild(JudgesPage),
  ],
})
export class JudgesPageModule {}
