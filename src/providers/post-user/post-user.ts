import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class PostUserProvider {

  constructor(public http: Http) {}

  register(value) {
    const url = 'https://dinh-angular-app.herokuapp.com/signup';
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
     .toPromise()
     .then(res => res.json());
  }
  login(value) {
    const url = 'https://dinh-angular-app.herokuapp.com/login';
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
     .toPromise()
     .then(res => res.json());
  }
  logout(value) {
    const url = 'https://dinh-angular-app.herokuapp.com/logout';
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
     .toPromise()
     .then(res => res.json());
  }


}
