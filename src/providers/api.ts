import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiProvider {
  protected apiURL: String = 'https://siegedatabase.herokuapp.com/api'
  constructor(public http: HttpClient) { }

  getUsers(user) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}/search?username=${user.name}&platform=${user.platform}`).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }
  getDetails(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}/details/${id}`).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }
  getSeasonDetails(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiURL}/seasons/${id}`).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }
}
