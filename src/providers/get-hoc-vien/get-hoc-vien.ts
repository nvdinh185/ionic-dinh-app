import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetHocVienProvider {

  constructor(public http: HttpClient) {
  }

  getHocVien(){
    const url = 'https://dinh-angular-app.herokuapp.com/hocvien-ionic';
    return this.http.get(url)
    .toPromise()
    .then(res => res);
  }

}
