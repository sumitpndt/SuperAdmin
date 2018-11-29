import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
    forgotform: FormGroup;
    submitted = false;
    err_message : string;

    constructor(private _auth:AuthService, private _router : Router, private _app : AppComponent, private formBuilder: FormBuilder) {}
    ngOnInit() {
        this.forgotform = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }
    get forgotUserData() { return this.forgotform.controls; }

    onForgot()
    {
        this.submitted = true;
        if (this.forgotform.invalid) {
            return;
        }
        this._app.loading = true;
        this._auth.forgotUser(this.forgotform.value)
        .subscribe(
        res => {
            debugger;
            //this._router.navigate(["/authentication/login"]);
            this.err_message = res.error.message;
            this._app.loading = false;
        },
        err => {
            this.err_message = err.error.message;
            this._app.loading = false;
            //console.log(err);
        },
        );
        
    }
}
