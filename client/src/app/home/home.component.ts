import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:object;
  constructor(private _mainService:MainService ,private _router:Router) {
    this.user={} 
}
  
  ngOnInit() {
    this._mainService.getUser((cb_user)=>{
      this.user=cb_user
    })
  }
  
  logout() {
    this._mainService.logout()
    
  }
}
