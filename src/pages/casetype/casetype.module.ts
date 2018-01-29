import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CasetypePage } from './casetype';


@NgModule({
  declarations: [
    CasetypePage,
  ],
  imports: [
    IonicPageModule.forChild(CasetypePage),
  ],
})
export class CasetypePageModule {}
