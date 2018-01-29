import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { IncumbencyPage } from '../incumbency/incumbency';

/**
 * Generated class for the GoverningbodyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-governingbody',
  templateUrl: 'governingbody.html',
})
export class GoverningbodyPage {
  governingbodydata: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public appsetting:Appsetting,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoverningbodyPage');
  this.governingbody();
  }
  IncumbencyPage(ids){
    this.navCtrl.push(IncumbencyPage,{id:ids});
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.governingbody();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  governingbody(){
    let options = this.appsetting.headers();
    var Loading = this.loadingCtrl.create({
     spinner: 'bubbles',
     content:'Loading'
   });
   Loading.present().then(() => {
     this.http.get(this.appsetting.myGlobalVar+'GetGoverningBody', options)
       .subscribe(data => {
         Loading.dismiss();
        // console.log(data['_body']);
         var jj = JSON.parse(data['_body']);
         console.log(JSON.parse(jj));
         this.governingbodydata = JSON.parse(jj);
       })
     })
  }
}
