import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as xml2js from 'xml2js';
import { GoverningbodyPage } from '../governingbody/governingbody';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
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
    console.log('ionViewDidLoad GalleryPage');
   let options = this.appsetting.headers();
   var Loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    content:'Loading'
  });
  Loading.present().then(() => {
    this.http.get(this.appsetting.myGlobalVar+'GetGalleryImages', options)
      .subscribe(data => {
        Loading.dismiss();
       // console.log(data['_body']);
        var jj = JSON.parse(data['_body']);
        console.log(JSON.parse(jj));
        this.gallerydata = JSON.parse(jj);
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
   this.http.get(this.appsetting.myGlobalVar+'GetGalleryImages', options)
     .subscribe(data => {
       Loading.dismiss();
      // console.log(data['_body']);
       var jj = JSON.parse(data['_body']);
       console.log(JSON.parse(jj));
       this.gallerydata = JSON.parse(jj);
     })
   })
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 2000);
}
}
