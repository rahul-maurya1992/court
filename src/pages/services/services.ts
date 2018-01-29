import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as xml2js from 'xml2js';
import { GoverningbodyPage } from '../governingbody/governingbody';
import { ServicesdetailPage } from '../servicesdetail/servicesdetail';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CasenumberPage } from '../casenumber/casenumber';
import { FirnumberPage } from '../firnumber/firnumber';
import { PartynamePage } from '../partyname/partyname';
import { AdvocatenamePage } from '../advocatename/advocatename';
import { CasecodePage } from '../casecode/casecode';
import { ActPage } from '../act/act';
import { CasetypePage } from '../casetype/casetype';
import { Casenumber1Page } from '../casenumber1/casenumber1';
import { CourtnumberPage } from '../courtnumber/courtnumber';
import { Partyname1Page } from '../partyname1/partyname1';
import { OrderdatePage } from '../orderdate/orderdate';
import { CauselistPage } from '../causelist/causelist';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  gallerydata: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    
  }

  ionViewDidLoad() {
   // alert('latest');
    console.log('ionViewDidLoad ServicesPage');
  }
  ServicesdetailPage(){
  this.navCtrl.push(ServicesdetailPage);
}
casenumber(){
  this.navCtrl.push(CasenumberPage);
}
firnumber(){
  this.navCtrl.push(FirnumberPage);
}
partyname(){
  this.navCtrl.push(PartynamePage);
}
Advocatename(){
  this.navCtrl.push(AdvocatenamePage);
}
casecode(){
  this.navCtrl.push(CasecodePage);
}
act(){
  this.navCtrl.push(ActPage);
}
casetype(){
  this.navCtrl.push(CasetypePage);
}
casenumber1(){
  this.navCtrl.push(Casenumber1Page);
}
courtnumber(){
  this.navCtrl.push(CourtnumberPage);
}
partyname1(){
  this.navCtrl.push(Partyname1Page);
}
orderdate(){
  this.navCtrl.push(OrderdatePage);
}
causelist(){
  this.navCtrl.push(CauselistPage);
}
}
