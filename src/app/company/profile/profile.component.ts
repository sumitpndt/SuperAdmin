import { Component, OnInit, AfterViewInit,ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {RegisterRequest, CompanyList,CompanyUpdateRequest, companyPlanList, companyPlan} from '../CompanyContracts';
import {Companyservice} from '../companyservice';
//rxjs
import { ToastsManager } from 'ng6-toastr/ng2-toastr';
import { Common } from '../../Common';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    companyProfileform: FormGroup;
    submitted = false;
    err_message : string;
    public companyList: Array<CompanyList> = [];
    public planList:Array<companyPlan> = [];
    public editMode:boolean=false;
    public title:string="Add Company Profile";
    constructor(private _auth:AuthService,private toastr:ToastsManager,private vcr: ViewContainerRef, private _router : Router,private _app : AppComponent, private formBuilder: FormBuilder, private companyservice :Companyservice) {
      debugger;
      this.toastr.setRootViewContainerRef(vcr);
        this.GetcompanyPlanList();
        if(localStorage.getItem('Editmode')!=null)
        { 
            this.title="Update Company Profile";
            this.editMode = JSON.parse(localStorage.getItem('Editmode'));
            localStorage.removeItem('Editmode');
        }
      
    }

    ngOnInit() {
        if(localStorage.getItem('Editmode')!=null)
        { 
            this.title="Update Company Profile";
            this.editMode = JSON.parse(localStorage.getItem('Editmode'));
            localStorage.removeItem('Editmode');
        }
        let myToken = localStorage.getItem('token');
        if(!this.editMode)
        {
        this.companyProfileform = this.formBuilder.group({
            company_name: ['', [Validators.required]],
            license_no:['',[Validators.required]],
            company_address: ['', [Validators.required]],
            company_mailing_address: ['', [Validators.required]],
            company_contact_number: ['', [Validators.required]],
            company_email:['', [Validators.required, Validators.pattern(Common.emailPattern)]],
            company_country:['',[Validators.required]],
            company_pincode:['',[Validators.required]],
           // company_username:['',[Validators.required]],
            company_password:[''],
      
            // NoofDrivers:['',[Validators.required]],
            // company_Approve:['',Validators.required],
            // company_active:['',Validators.required],
            company_plan_id:['',Validators.required]
           // myToken:[myToken,[Validators.required]]
        }); 
    }
    else{
        this.companyProfileform = this.formBuilder.group({
            company_name: ['', [Validators.required]],
            license_no:['',[Validators.required]],
            company_address: ['', [Validators.required]],
            company_mailing_address: ['', [Validators.required]],
            company_contact_number: ['', [Validators.required]],
            company_email:['', [Validators.required, Validators.pattern(Common.emailPattern)]],
            company_country:['',[Validators.required]],
            company_pincode:['',[Validators.required]],
           // company_username:['',[Validators.required]],
            company_password:[''],
      
            // NoofDrivers:['',[Validators.required]],
            // company_Approve:['',Validators.required],
            // company_active:['',Validators.required],
            company_plan_id:['',Validators.required]
           // myToken:[myToken,[Validators.required]]
        }); 
        this.LoadCompanyDetails();
    }
    }
    GetcompanyPlanList(){
        this.companyservice.GetPlanList().subscribe(res=>{
            res.data.company_plan.forEach(item => {
                  this.planList.unshift(item);
                });
        },        
        err => {
            err => console.log(err);
        });
        
    }
   
    Cancel(){
        this._router.navigate(["/company/CompanyManagement"]);
    }
    get companyproUserData() { return this.companyProfileform.controls; }
    companyProfile() {
        if(this.editMode)
        {
            this.UpdateCompany();
        }
        else
        {
        debugger;
        this.submitted = true;
        if (this.companyProfileform.invalid) {
            return;
        }

        this._app.loading = true;
        let Request = new RegisterRequest();
        Request.company_name = this.companyProfileform.value['company_name'];
        Request.company_plan_id = this.companyProfileform.value['company_plan_id'];
        Request.address_home = this.companyProfileform.value['company_address'];
        Request.address_office = this.companyProfileform.value['company_mailing_address'];
        Request.phone = this.companyProfileform.value['company_contact_number'];
        Request.country = this.companyProfileform.value['company_country'];
        Request.email_id = this.companyProfileform.value['company_email'];
        Request.password = this.companyProfileform.value['company_password'];
        Request.pincode = this.companyProfileform.value['company_pincode'];
        //Request.username = this.companyProfileform.value['company_username'];
        Request.license_no = this.companyProfileform.value['license_no'];
        

        this.companyservice.register(Request)
        .subscribe( 
        res => {
            this.toastr.success(res, 'Success!');
            this._router.navigate(["/company/CompanyManagement"]);
          
        },
        err => {
            err => console.log(err)
            this.toastr.error('Internal Server Error', 'Error!');
        },
        );
    }
    }

    LoadCompanyDetails(){
        debugger;
        this.editMode = true;
        let data = JSON.parse(localStorage.getItem("company"));
        this.companyProfileform.setValue({
            company_name:data.company_name,
            license_no:data.license_no,
            company_address: data.address_home,
            company_mailing_address: data.address_office,
            company_contact_number: data.phone,
            company_email:data.email_id,
            company_country:data.country,
            company_pincode:data.pincode,
            company_password:"",
            company_plan_id:data.company_plan_id,
        });
       // localStorage.removeItem('company');
    }

    UpdateCompany() {
        debugger;
        this.submitted = true;
        if (this.companyProfileform.invalid) {
            return;
        }
        let data = JSON.parse(localStorage.getItem("company"));
        this._app.loading = true;
        let Request = new CompanyUpdateRequest();
        Request.company_name = this.companyProfileform.value['company_name'];
        Request.company_plan_id = this.companyProfileform.value['company_plan_id'];
        Request.address_home = this.companyProfileform.value['company_address'];
        Request.address_office = this.companyProfileform.value['company_mailing_address'];
        Request.phone = this.companyProfileform.value['company_contact_number'];
        Request.country = this.companyProfileform.value['company_country'];
        Request.email_id = this.companyProfileform.value['company_email'];
        Request.password = this.companyProfileform.value['company_password'];
        Request.pincode = this.companyProfileform.value['company_pincode'];
        //Request.username = this.companyProfileform.value['company_username'];
        Request.license_no = this.companyProfileform.value['license_no'];
        Request.id = data.id;
        

        this.companyservice.UpdateCompany(Request)
        .subscribe( 
        res => {
            this.toastr.success(res, 'Success!');
            this._router.navigate(["/company/CompanyManagement"]);
          
        },
        err => {
            this.toastr.error(err, 'Error!');
            err => console.log(err)
        },
        );
    }

}
