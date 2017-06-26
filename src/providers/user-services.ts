import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class UserServicesProvider {

 

  constructor(public http: Http) {
  }

  getUser() {
    return this.http.get('assets/json/usersJSON.json')
      .map(response => response.json());
  }

}
