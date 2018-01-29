import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

/**
 * Generated class for the ActPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-causelist',
  templateUrl: 'causelist.html',
})
export class CauselistPage {
  link: any;
  gallerydata: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActPage');
  }


}
