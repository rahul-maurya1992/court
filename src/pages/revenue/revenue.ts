import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as xml2js from 'xml2js';
import { GoverningbodyPage } from '../governingbody/governingbody';

/**
 * Generated class for the RevenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revenue',
  templateUrl: 'revenue.html',
})
export class RevenuePage {
  revenuedata: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public appsetting:Appsetting,
    public loadingCtrl: LoadingController
  ) {

   // alert('revenue');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RevenuePage');
   let options = this.appsetting.headers();
   var Loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    content:'Loading'
  });
  Loading.present().then(() => {
    this.http.get(this.appsetting.myGlobalVar+'GetRevenueOfficers', options)
      .subscribe(data => {
        Loading.dismiss();
       // console.log(data['_body']);
        var jj = JSON.parse(data['_body']);
        console.log(JSON.parse(jj));
        this.revenuedata = JSON.parse(jj);
      })
    })
  }
GoverningbodyPage(){
  this.navCtrl.push(GoverningbodyPage);
}
doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  let options = this.appsetting.headers();
  var Loading = this.loadingCtrl.create({
   spinner: 'bubbles',
   content:'Loading'
 });
 Loading.present().then(() => {
   this.http.get(this.appsetting.myGlobalVar+'GetRevenueOfficers', options)
     .subscribe(data => {
       Loading.dismiss();
      // console.log(data['_body']);
       var jj = JSON.parse(data['_body']);
       console.log(JSON.parse(jj));
       this.revenuedata = JSON.parse(jj);
     })
   })
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 2000);
}

}
