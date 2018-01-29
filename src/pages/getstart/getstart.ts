import { Component } from '@angular/core';
import { IonicPage,Platform, NavController, NavParams, LoadingController,ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DirectoryPage } from '../directory/directory';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { GoverningbodyPage } from '../governingbody/governingbody';

/**
 * Generated class for the GetstartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getstart',
  templateUrl: 'getstart.html',
})
export class GetstartPage {
  getstarteddata: any;
public data:any = '';
  constructor(
    public platform:Platform,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appsetting:Appsetting,
    public http:Http,
    public loadingCtrl:LoadingController,
    public toastCtrl:ToastController
  ) {
  //  alert('started');
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad GetstartPage');
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

  onClick(signinForm) {
    console.log(signinForm.value);
   // this.navCtrl.push(DirectoryPage);
   let options = this.appsetting.headers();
   var postdata = {
     strMobile:signinForm.value.mobile
   }
   var serialized = this.appsetting.serializeObj(postdata);
   var Loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    content:'Loading...'
  });

  Loading.present().then(() => {
this.http.post('http://barassociationpanipat.in/webservice.asmx/RegisterMobile',serialized,options).subscribe(response=>{
  console.log(response);
  Loading.dismiss();
  var jj = JSON.parse(response['_body']);
        console.log(JSON.parse(jj)[0]);
        var dat = JSON.parse(jj)[0];
        localStorage.setItem('mobile',JSON.stringify(dat));
        this.navCtrl.push(GoverningbodyPage);
})
    })
  }

}
