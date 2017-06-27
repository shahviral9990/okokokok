import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Router } from "@angular/router";
declare var firebase: any;

@Injectable()
export class AngularService {
furl: string = "https://ng-demo-aa1f6.firebaseio.com/Tasks.json/"
 addProduct(item){
    let body = JSON.stringify(item);
    console.log(body);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let reqOption = new RequestOptions({ headers: header });

    return this._http.post(this.furl, body, reqOption)
    .map((res: Response) => res.json());
  }
  constructor(public _http: Http, public _router: Router) { }
 getAllProduct() {
    return this._http.get(this.furl).map((res: Response) => res.json());
  }
}
