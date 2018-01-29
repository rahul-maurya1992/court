import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GetstartPage } from '../pages/getstart/getstart';
import { DirectoryPage } from '../pages/directory/directory';
import { Appsetting } from '../providers/appsetting';
import { HttpModule } from '@angular/http';
import { GoverningbodyPage } from '../pages/governingbody/governingbody';
import { IncumbencyPage } from '../pages/incumbency/incumbency';
import { GalleryPage } from '../pages/gallery/gallery';
import { JudgesPage } from '../pages/judges/judges';
import { RevenuePage } from '../pages/revenue/revenue';
import { ServicesPage } from '../pages/services/services';
import { ServicesdetailPage } from '../pages/servicesdetail/servicesdetail';


import { FirnumberPage } from '../pages/firnumber/firnumber';
import { CasenumberPage } from '../pages/casenumber/casenumber';
import { Casenumber1Page } from '../pages/casenumber1/casenumber1';
import { PartynamePage } from '../pages/partyname/partyname';
import { Partyname1Page } from '../pages/partyname1/partyname1';
import { AdvocatenamePage } from '../pages/advocatename/advocatename';
import { CasecodePage } from '../pages/casecode/casecode';
import { ActPage } from '../pages/act/act';
import { CasetypePage } from '../pages/casetype/casetype';
import { CourtnumberPage } from '../pages/courtnumber/courtnumber';
import { OrderdatePage } from '../pages/orderdate/orderdate';
import { CauselistPage } from '../pages/causelist/causelist';
import { IncumbencyfrontPage } from '../pages/incumbencyfront/incumbencyfront';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ImportantlinksPage } from '../pages/importantlinks/importantlinks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GetstartPage,
    DirectoryPage,
    GoverningbodyPage,
    IncumbencyPage,
    GalleryPage,
    RevenuePage,
    JudgesPage,
    ServicesPage,
    ServicesdetailPage,
    FirnumberPage,
    CasenumberPage,
    Casenumber1Page,
    PartynamePage,
    Partyname1Page,
    AdvocatenamePage,
    CasecodePage,
    ActPage,
    CasetypePage,
    CourtnumberPage,
    OrderdatePage,
    CauselistPage,
    IncumbencyfrontPage,
    ImportantlinksPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GetstartPage,
    DirectoryPage,
    GoverningbodyPage,
    IncumbencyPage,
    GalleryPage,
    RevenuePage,
    JudgesPage,
    ServicesPage,
    ServicesdetailPage,
    FirnumberPage,
    CasenumberPage,
    Casenumber1Page,
    PartynamePage,
    Partyname1Page,
    AdvocatenamePage,
    CasecodePage,
    ActPage,
    CasetypePage,
    CourtnumberPage,
    OrderdatePage,
    CauselistPage,
    IncumbencyfrontPage,
    ImportantlinksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Appsetting,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
