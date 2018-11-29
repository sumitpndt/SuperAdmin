import { Component, OnInit, AfterViewInit} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'recent-comment',
	templateUrl: './recent-comment.component.html'
})
export class RecentcommentComponent implements OnInit{ 
	suportshows = [];
	constructor(private _auth:AuthService, private _router : Router, private _app : AppComponent) {}
	ngOnInit() {
        let myToken = localStorage.getItem('token');
        this._auth.suportallUser(myToken)
        .subscribe(
            res => 
            { 
              this.suportshows = res.data.suportshows;                
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