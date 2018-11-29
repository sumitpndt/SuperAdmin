import { Component, OnInit, AfterViewInit} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'activity-timeline',
	templateUrl: './activity.component.html',
styleUrls: ['./activity.component.css'] 
})
export class ActivityComponent implements OnInit {
	faqshows = [];
	constructor(private _auth:AuthService, private _router : Router,private _app : AppComponent) {}
	ngOnInit() {
        let myToken = localStorage.getItem('token');
        this._auth.faqallUser(myToken)
        .subscribe(
            res => 
            { 
              this.faqshows = res.data.faqshows;                
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
}