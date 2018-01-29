import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the ImportantlinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-importantlinks',
  templateUrl: 'importantlinks.html',
})
export class ImportantlinksPage {
  link: any;
  gallerydata: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public iab:InAppBrowser
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImportantlinksPage');
  }
  inappbrowser(url){
    var target = '_blank';
    var options = 'location=no';
    const browser = this.iab.create(url,target,options);
   
  }


}
