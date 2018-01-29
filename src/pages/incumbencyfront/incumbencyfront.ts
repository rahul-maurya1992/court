import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import { IncumbencyPage } from '../incumbency/incumbency';

/**
 * Generated class for the IncumbencyfrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-incumbencyfront',
  templateUrl: 'incumbencyfront.html',
})
export class IncumbencyfrontPage {
  link: any;
  gallerydata: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad incumbencyfront');
  }
  president(ids,ptitle){
    this.navCtrl.push(IncumbencyPage,{id:ids,title:ptitle});
  }


}
