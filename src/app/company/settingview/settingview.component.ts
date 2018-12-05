import { Component, OnInit, AfterViewInit} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { HttpErrorResponse } from '@angular/common/http';
 
@Component({
  selector: 'app-settingview',
	templateUrl: 'settingview.component.html' ,
	styleUrls: ['./settingview.component.css']
})
export class SettingviewComponent implements OnInit {
  authuser = [];
  constructor(private _auth:AuthService, private _router : Router,private _app : AppComponent) {this._auth.getToken();}
  
  ngOnInit() {
        let myToken = localStorage.getItem('token');
        this._auth.companysettingviewUser(myToken)
        .subscribe(
            res => 
            {        
              //this.authuser = res.data.authuser;                
              this._app.loading = false;
            },
            err => {
              if(err instanceof HttpErrorResponse)
              {
                if(err.status == 401)
                {
                  // this._app.loading = false;
                  this._router.navigate(["authentication/login"]);
                }
              }
            }
          )
    }   	
    open2(abc){
      
    }
}