import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';

/**
 * Generated class for the Casenumber1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-casenumber1',
  templateUrl: 'casenumber1.html',
})
export class Casenumber1Page {
  link: any;
  gallerydata: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesdetailPage');

  }

}
