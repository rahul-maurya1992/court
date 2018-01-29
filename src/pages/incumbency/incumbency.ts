import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as xml2js from 'xml2js';
import { GoverningbodyPage } from '../governingbody/governingbody';

/**
 * Generated class for the DirectoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incumbency',
  templateUrl: 'incumbency.html',
})
export class IncumbencyPage {
  pagetitle: any;
  incumbencydata: any;
  url: string;
  ids: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public appsetting:Appsetting,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('id'));
    this.ids = this.navParams.get('id');
    this.pagetitle = this.navParams.get('title');
    console.log('ionViewDidLoad IncumbencyPage');
    this.incumbency();
  }
  
  

GoverningbodyPage(){
  this.navCtrl.push(GoverningbodyPage);
}
doRefresh(refresher) {
  console.log('Begin async operation', refresher);
 this.incumbency();
}
incumbency(){
  let options = this.appsetting.headers();
  var Loading = this.loadingCtrl.create({
   spinner: 'bubbles',
   content:'Loading'
 });
 Loading.present().then(() => {
   if(this.ids == 1){
     this.url = this.appsetting.myGlobalVar+'GetPresidentList';
     this.http.get(this.url, options).subscribe(data => {
       Loading.dismiss();
       var jj = JSON.parse(data['_body']);
       console.log(JSON.parse(jj));
       this.incumbencydata = JSON.parse(jj);
     })
   }else if(this.ids == 2){
     this.url = this.appsetting.myGlobalVar+'GetSecretaryData';
     this.http.get(this.url, options).subscribe(data => {
       Loading.dismiss();
       var jj = JSON.parse(data['_body']);
       console.log(JSON.parse(jj));
       this.incumbencydata = JSON.parse(jj);
     })
   }else if(this.ids ==3){
     this.url = this.appsetting.myGlobalVar+'GetVicePresidentList';
     this.http.get(this.url, options).subscribe(data => {
       Loading.dismiss();
       var jj = JSON.parse(data['_body']);
       console.log(JSON.parse(jj));
       this.incumbencydata = JSON.parse(jj);
     })
   }else if(this.ids ==4){
     this.url = this.appsetting.myGlobalVar+'GetJointSecretaryList';
     this.http.get(this.url, options).subscribe(data => {
       Loading.dismiss();
       var jj = JSON.parse(data['_body']);
       console.log(JSON.parse(jj));
       this.incumbencydata = JSON.parse(jj);
     })
   }else{
     Loading.dismiss();
   }
   
   })
}
}
