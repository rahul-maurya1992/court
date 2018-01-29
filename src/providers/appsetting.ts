import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Appsetting provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Appsetting {
  iframeurl:any;
 myGlobalVar: string = 'http://barassociationpanipat.in/webservice.asmx/';//'http://ec2-13-59-151-198.us-east-2.compute.amazonaws.com/api/';//'http://fashapp.io/api/';
  constructor(public http: Http) {
    console.log('Hello Appsetting Provider');
    // alert('jdhjdh');
  }
  headers(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
    return options;
  }
serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
}