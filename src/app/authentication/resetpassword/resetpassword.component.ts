import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-resetpassword',
    templateUrl: './resetpassword.component.html',
    styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
    resetpasswordform: FormGroup;
    submitted = false;
    err_message : string;

    constructor(private _auth:AuthService, private _router : Router, private _app : AppComponent, private formBuilder: FormBuilder) {}
    ngOnInit() {
        this.resetpasswordform = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
            token: ['', [Validators.required, Validators.minLength(5)]]
        });
    }
    get resetpassUserData() { return this.resetpasswordform.controls; }

    onResetPassword()
    {
        this.submitted = true;
        if (this.resetpasswordform.invalid) {
            return;
        }
        this._app.loading = true;
        this._auth.resetpasswordUser(this.resetpasswordform.value)
        .subscribe(
        res => {
            //localStorage.setItem("token",res.data.token);
            this._router.navigate(["/authentication/login"]);
        },
        err => {
            this.err_message = err.error.message;
            this._app.loading = false;
            console.log(err);
        },
        );
        
    }
}
