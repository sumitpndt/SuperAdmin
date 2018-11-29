import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
 

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

    companySettingform: FormGroup;
    submitted = false;
    err_message : string;

    constructor(private _auth:AuthService, private _router : Router,private _app : AppComponent, private formBuilder: FormBuilder) {}

    ngOnInit() {
        let myToken = localStorage.getItem('token');
        this.companySettingform = this.formBuilder.group({
            //image:['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phonenumber:['',[Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            address:['',[Validators.required]],
            facebook:['',[Validators.required]],
            twitter:['',[Validators.required]],
            youtube:['',[Validators.required]],
            myToken:[myToken,[Validators.required]]
        }); 
    }
    get companysettingUserData() { return this.companySettingform.controls; }
    
    companySetting() {
        this.submitted = true;
        if (this.companySettingform.invalid) {
            return;
        }
        this._app.loading = true;
        this._auth.companysettingUser(this.companySettingform.value)
        .subscribe( 
        res => {
            //localStorage.setItem("token",res.data.token);
            this._router.navigate(["/dashboard/dashboard1"]);  
        },
        err => {
            this.err_message = err.error.message;
            this._app.loading = false;
            //console.log(err);
            err => console.log(err)
        },
        );
    }

}
