import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    registerform: FormGroup;
    submitted = false;
    //err_message : string;

    constructor(private _auth:AuthService, private _router: Router, private _app: AppComponent, private formBuilder: FormBuilder){}

    ngOnInit() {
        this.registerform = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
            checkboxsignup:['', [Validators.required]]
        });
        
    }
    get registerUserData() { return this.registerform.controls; }
    registerUser()
    {
        this.submitted = true;
        if (this.registerform.invalid) {
            return;
        }

        this._app.loading = true;
        this._auth.registerUser(this.registerform.value)
        .subscribe(
        res => {
            localStorage.setItem("token",res.data.token)        
            this._router.navigate(["/dashboard/dashboard1"]);
            this._app.loading = false;
        },
            err => console.log(err)
            //this.err_message = err.error.message;
            //this._app.loading = false;
            //console.log(err);
        );
        
    }
}
