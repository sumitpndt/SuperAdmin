import { Component, OnInit, AfterViewInit,ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { companyPlanList, companyPlan, UserProfile, EditProfileRequest} from '../SamplePagesContract';
import {SamplePageService} from '../SamplePagesServices';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';
import {Common} from '../../Common';
@Component({
	templateUrl: 'profile.component.html' ,
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
	public imageUrl:string = Common.baseImageUrl+ localStorage.getItem("image");
	submitted = false;
	err_message : string;
	public user :UserProfile;
	constructor(private _auth:AuthService,private toastr:ToastsManager,private vcr: ViewContainerRef, private _router : Router,private _app : AppComponent, private formBuilder: FormBuilder, private sampleService :SamplePageService) {
		this.toastr.setRootViewContainerRef(vcr);
		this.GetUserProfile();
	  }
	  fileToUpload: File = null;
	  EditProfileform:FormGroup;
	  fileChange(event) {
		debugger;
		this._app.loading = true;
		let fileList: FileList = event.target.files;
		if(fileList.length > 0) {
			let file: File = fileList[0];
			let id = Number(localStorage.getItem('userid'));
			this.sampleService.uploadProfileImage(file,id).subscribe(Response  => {
				this.toastr.success('Image uploaded Successfully','Success !');
				  this.imageUrl =   Common.baseImageUrl+Response.profile_Image;
				  localStorage.setItem('image',Response.profile_Image);
				  window.location.reload();
				  debugger;
				  // do something, if upload success
				  }, error => {
				   // console.log(error);
				  });
		}
	}
	public emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
	ngOnInit(){
this.EditProfileform = this.formBuilder.group({
	name:['',Validators.required],
	phone:['',Validators.required],
	email: ['',[Validators.required,Validators.pattern(Common.emailPattern)]]

	//Password:['',Validators.required]
});
	}
	get ProfileData() { return this.EditProfileform.controls; }

	UpdateProfile(){
	  debugger;
		  this.submitted = true;
		  if (this.EditProfileform.invalid) {
			  return;
		  }
  
		  this._app.loading = true;
		  let Request = new EditProfileRequest();
		  Request.id = Number(localStorage.getItem("userid"));
		  Request.name = this.EditProfileform.value['name'];
		  Request.email = this.EditProfileform.value['email'];
		  Request.password = this.EditProfileform.value['Password'];
		  Request.phone_number = this.EditProfileform.value['phone'];
		  
  
		  this.sampleService.UpdateProfile(Request)
		  .subscribe( 
		  res => {
			 debugger;
			 this.toastr.success('Updated Successfully','Success !');
			this._router.navigate(['/dashboard/dashboard1']);
		  },
		  err => {
			  err => console.log(err)
		  },
		  );
	}

	GetUserProfile(){
		debugger;
		let id = localStorage.getItem("userid");
        this.sampleService.GetProfilebyId(id).subscribe(res=>{
			debugger;
		 this.imageUrl=	Common.baseImageUrl+res.data.profile_image;
		   this.EditProfileform.setValue({
			name:res.data.profile_show[0].name,
			phone:res.data.profile_show[0].phonenumber,
			email: res.data.profile_show[0].email
			//Password:res.data.profile_show[0].password
		  })
        },        
        err => {
            err => console.log(err);
        });
        
    }
}