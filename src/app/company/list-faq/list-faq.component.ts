import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FaqService } from '../../services/faq.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-list-faq',
  templateUrl: './list-faq.component.html',
  styleUrls: ['./list-faq.component.css']
})
export class ListFaqComponent implements OnInit {
  //faqs : FaqList[];
  constructor(private _auth:AuthService, private _router : Router,private _app : AppComponent, private formBuilder: FormBuilder) {}
  
  
 // users: [];
  ngOnInit() {
    
  }
/*
  constructor(private router: Router) { }

  
/*
  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };
*/
  addUser(): void {
    this._router.navigate(['add-user']);
  };
  
}
