import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as xml2js from 'xml2js';
import { GoverningbodyPage } from '../governingbody/governingbody';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ServicesdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicesdetail',
  templateUrl: 'servicesdetail.html',
})

export class ServicesdetailPage {
  link: any;
  gallerydata: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public appsetting:Appsetting,
    public loadingCtrl: LoadingController,
    public sanitizer :DomSanitizer
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesdetailPage');
   console.log(this.navParams.get('url'));
  // this.link = this.navParams.get('url');
   this.appsetting.iframeurl = this.sanitizer.bypassSecurityTrustUrl(this.navParams.get('url'));
   console.log(this.appsetting.iframeurl.changingThisBreaksApplicationSecurity);
   this.link = this.appsetting.iframeurl.changingThisBreaksApplicationSecurity;
  }
GoverningbodyPage(){
  this.navCtrl.push(GoverningbodyPage);
}

}
