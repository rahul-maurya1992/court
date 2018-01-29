import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { GetstartPage } from '../pages/getstart/getstart';
import { DirectoryPage } from '../pages/directory/directory';
import { GoverningbodyPage } from '../pages/governingbody/governingbody';
import { JudgesPage } from '../pages/judges/judges';
import { RevenuePage } from '../pages/revenue/revenue';
import { GalleryPage } from '../pages/gallery/gallery';
import { ServicesPage } from '../pages/services/services';
import { IncumbencyfrontPage } from '../pages/incumbencyfront/incumbencyfront';
import { ImportantlinksPage } from '../pages/importantlinks/importantlinks';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public iab:InAppBrowser
  ) {
   // alert('hsdfjksdj');
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Directory', component: DirectoryPage, icon: "assets/imgs/directory.png" },
      { title: 'Governing body', component: GoverningbodyPage, icon: "assets/imgs/governing.png" },
      { title: 'JUDGES & DA ATTORNEY', component: JudgesPage, icon: "assets/imgs/judges.png" },
      { title: 'Revenue officers', component: RevenuePage, icon: "assets/imgs/officers.png" },
      { title: 'Incumbency', component: IncumbencyfrontPage, icon: "assets/imgs/incumbency.png" },
      { title: 'Gallery', component: GalleryPage, icon: "assets/imgs/gallery.png" },
      { title: 'Services', component: ServicesPage, icon: "assets/imgs/services.png" },
      { title: 'Important links', component: ImportantlinksPage, icon: "assets/imgs/link.png" },
      // { title: 'Member registration', component: ServicesPage, icon: "assets/imgs/member.png" },
    ];
  }
  


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    if(localStorage.getItem('mobile')){
      this.rootPage = GoverningbodyPage;
    }else{
      this.rootPage = GetstartPage;
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  inappbrowser(){
  var target = '_blank';
  var options = 'location=no';
    const browser = this.iab.create('http://barassociationpanipat.in/Registration.aspx',target,options);
    
  }
}
