import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { debug } from 'util';

@Component({
    selector: 'app-login',
    templateUrl: './login2.component.html',
    styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

    constructor(public router: Router) {}

    ngOnInit() {
        this.signout();
        this.router.navigate(['/authentication/login']);
    }
    signout() {
debugger;
        localStorage.clear();
        window.location.reload();
    }
    // ngAfterViewInit() {
    //     $(function() {
    //         $(".preloader").fadeOut();
    //     });
    //     $('#to-recover').on("click", function() {
    //         $("#loginform").slideUp();
    //         $("#recoverform").fadeIn();
    //     });
    // }

}
