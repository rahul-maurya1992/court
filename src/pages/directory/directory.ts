import { Component } from '@angular/core';
import { IonicPage,Platform,ToastController, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import * as xml2js from 'xml2js';
import { GoverningbodyPage } from '../governingbody/governingbody';
import { JudgesPage } from '../judges/judges';
import { RevenuePage } from '../revenue/revenue';
import { GalleryPage } from '../gallery/gallery';
import { ServicesPage } from '../services/services';

/**
 * Generated class for the DirectoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {
  page: number = 0;
  directorydata: any = [];

  constructor(
    public platform:Platform,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http:Http,
    public appsetting:Appsetting,
    public loadingCtrl: LoadingController,
    public toastCtrl:ToastController
  ) {
   // alert('directory vv ss');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoryPage');
    this.getdirectorydata();
    this.exitapp();
  }
GoverningbodyPage(){
  this.navCtrl.push(GoverningbodyPage);
}
judges(){
  this.navCtrl.push(JudgesPage);
}
revenue(){
  this.navCtrl.push(RevenuePage);
}
gallery(){
  this.navCtrl.push(GalleryPage);
}
services(){
  this.navCtrl.push(ServicesPage);
}
exitapp(){
  this.platform.ready().then(() => {
    var lastTimeBackPress = 0;
    var timePeriodToExit  = 2000;

    this.platform.registerBackButtonAction(() => {
        // get current active page
        let view = this.navCtrl.getActive();
            if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                this.platform.exitApp(); //Exit from app
            } else {
             // alert('Press back again to exit App?');
                let toast = this.toastCtrl.create({
                    message:  'Press back again to exit from app?',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                lastTimeBackPress = new Date().getTime();
            }
    });
  });
}
getdirectorydata(){
  let options = this.appsetting.headers();
  var Loading = this.loadingCtrl.create({
   spinner: 'bubbles',
   content:'Loading...'
 });
 Loading.present().then(() => {
   
   this.http.get(this.appsetting.myGlobalVar+'GetDirectoryData', options)
     .subscribe(data => {
       Loading.dismiss();
      // console.log(data['_body']);
       var jj = JSON.parse(data['_body']);
       console.log(JSON.parse(jj));
       this.directorydata.push(JSON.parse(jj));
       console.log( this.directorydata);
     })
   })
}
doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  this.getdirectorydata();
    setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 2000);
}
Search(input){
  console.log(input);
  if(input.length>2){
    let options = this.appsetting.headers();
  var Loading = this.loadingCtrl.create({
   spinner: 'bubbles',
   content:'Loading...'
 });
 Loading.present().then(() => {
   var postdata = {
     strquery:input
   }
   let serialized = this.appsetting.serializeObj(postdata);
   this.http.post(this.appsetting.myGlobalVar+'GetDirectorySearch',serialized, options)
     .subscribe(data => {
       Loading.dismiss();
       var jj = JSON.parse(data['_body']);
       console.log(JSON.parse(jj));
       this.directorydata.push(JSON.parse(jj));
       console.log( this.directorydata);
     })
   })
  }else{
    this.directorydata = [];
  }
}
onCancel(){
  console.log('jasdhfkj');
}
doInfinite(infiniteScroll) {
  this.page = this.page+1;
  setTimeout(() => {
    let options = this.appsetting.headers();
    var Loading = this.loadingCtrl.create({
     spinner: 'bubbles',
     content:'Loading...'
   });
   Loading.present().then(() => {
     var postdata = {
       strPage:this.page
     }
     let serialized = this.appsetting.serializeObj(postdata);
     this.http.post(this.appsetting.myGlobalVar+'GetDirectoryByPage',serialized, options).subscribe(data => {
         Loading.dismiss();
         var jj = JSON.parse(data['_body']);
         console.log(JSON.parse(jj));
         this.directorydata.push(JSON.parse(jj));
         console.log( this.directorydata);
       })
     })

    console.log('Async operation has ended');
    infiniteScroll.complete();
  }, 1000);
}
}
