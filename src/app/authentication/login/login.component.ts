import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
//import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
    loginform: FormGroup;
    submitted = false;
    err_message : string;
    
    constructor(private _auth:AuthService, private _router : Router, private _app : AppComponent, private formBuilder: FormBuilder) {this._auth.removeToken();}
    ngOnInit() {
      
        this.loginform = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            checkbox:['']
        });
        
    }

    ngAfterViewInit() {
         
        /*$(function() {
            (".preloader").fadeOut();
        });
        */
       $('#to-recover').on("click", function() {
        $("#loginform").slideUp();
        $("#recoverform").fadeIn();
    });
    }

    get loginUserData() { return this.loginform.controls; }

    onLoggedin() {
        this.submitted = true;
        if (this.loginform.invalid) {
            return;
        }
        //console.log(this.loginUserData);

            this._app.loading = true;
            this._auth.loginUser(this.loginform.value)
            .subscribe(
            res => {
                debugger;
                localStorage.setItem("userid",res.data.id);
                localStorage.setItem("image", res.data.image);
                localStorage.setItem("name", res.data.name);
                localStorage.setItem("token",res.data.token);
                this._router.navigate(["/dashboard/dashboard1"]);
            },
            err => {
                this.err_message = err.error.message;
                this._app.loading = false;
                console.log(err);
            },
            );
            
    }

}
