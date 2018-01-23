import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Injectable()
export class MainService {
  user: object;
  constructor(private _http: Http ,private _router:Router) {

  }

  login(user, cb) {
    this._http.post('/login', user).subscribe((res) => {
      this.user = res.json()
      cb(res.json())
    })
  }
  getUser(cb) {
    cb(this.user)
  }
  logout() {
    this._http.get('/logout').subscribe((res) => {
      this.user = res.json();
      this._router.navigate(['']);
    })
  }
}
