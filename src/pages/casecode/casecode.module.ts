import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CasecodePage } from './casecode';


@NgModule({
  declarations: [
    CasecodePage,
  ],
  imports: [
    IonicPageModule.forChild(CasecodePage),
  ],
})
export class CasecodePageModule {}
