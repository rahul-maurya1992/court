import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as xml2js from 'xml2js';
import { GoverningbodyPage } from '../governingbody/governingbody';

/**
 * Generated class for the CasenumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-casenumber',
  templateUrl: 'casenumber.html',
})
export class CasenumberPage {
  link: any;
  gallerydata: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public appsetting:Appsetting,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesdetailPage');
   console.log(this.navParams.get('url'));
   this.link = this.navParams.get('url');
  }
GoverningbodyPage(){
  this.navCtrl.push(GoverningbodyPage);
}

}
