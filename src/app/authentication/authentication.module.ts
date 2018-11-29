import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotFoundComponent } from './404/not-found.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


import { AuthenticationRoutes } from './authentication.routing';


@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    LockComponent,
    Login2Component,
    Signup2Component,
    ForgotComponent,
    ResetpasswordComponent
    
  ]
})

export class AuthenticationModule {}