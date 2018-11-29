import { Component, OnInit, AfterViewInit,ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {RegisterRequest, CompanyList,ClientCompany, ActiveRequest, DeletecompanyRequest, FilterRequest} from '../CompanyContracts';
import {Companyservice} from '../companyservice';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';
@Component({
	templateUrl: 'companymangement.component.html',
styleUrls: ['./companymangement.component.css']	
})

export class CompanymangementComponent implements OnInit{
	constructor(private _auth:AuthService,private toastr:ToastsManager,private vcr: ViewContainerRef, private _router : Router,private _app : AppComponent, private formBuilder: FormBuilder, private companyservice :Companyservice) {
      this.GetCompanyList();
      this.GetUnApprovedCompanyList();
      this.toastr.setRootViewContainerRef(vcr);
    }
    submitted = false;
    err_message : string;
    public SearchForm:FormGroup;
    public companyList: Array<ClientCompany> = [];
    public unApprovedList: Array<ClientCompany> = [];
    checked: number[] = [];
    public searchText:string;
    public message:string;
    public p: number = 1;
    islogged() {
        if (!this._auth.isAuthenticated()) {
           this._router.navigate(['/authentication/login'])
            return false;
        }
        return true;
      }
	GetCompanyList(){
        debugger;
        this.companyList =[];
    this.companyservice.GetCompanyList().subscribe(res=>{
        debugger;
        res.data.client_company.forEach(item => {
           // let cmp = this.mapCompany(item);
            this.companyList.unshift(item);
            debugger;
          });
       // this.companyList = res;
    },        
    err => {
    });
    }
    get SearchData() { return this.SearchForm.controls; }
    SearchCompany(){
    debugger;
    this.companyList=[];
    this.submitted = true;
        if (this.SearchForm.invalid) {
            this.toastr.error('Check the date format or use calender','Error !');
            return;
            
        }
      let Request = new FilterRequest();
      Request.created_form = this.SearchForm.value['fromDate'].year+"-"+this.SearchForm.value['fromDate'].month+"-"+this.SearchForm.value['fromDate'].day;
      Request.created_to = this.SearchForm.value['toDate'].year+"-"+this.SearchForm.value['toDate'].month+"-"+this.SearchForm.value['toDate'].day;
      this.companyservice.GetFilterData(Request)
      .subscribe(res => {
        res.data.client_company.forEach(item => {
            // let cmp = this.mapCompany(item);
            
             this.companyList.unshift(item);
             debugger;
           });
           if(res.data.client_company.length==0){
               this.message ="No Records Found !";
           }
           else{
               this.message =null;
               this.toastr.success(res.data.client_company.length+' Company found','Success !');
           }
           
      },
      err => {
          err => console.log(err)
      },
      );
    }
    EditCompany(company){
        debugger;
        let edit = true;
        localStorage.setItem("company",JSON.stringify(company));
        localStorage.setItem("Editmode",JSON.stringify(edit));
        this._router.navigate(['/company/profile']);
    }
    GetUnApprovedCompanyList(){
        debugger;
    this.companyservice.GetUnApprovedClients().subscribe(res=>{
        debugger;
        res.data.client_company.forEach(item => {
          //  let cmp = this.mapCompany(item);
            this.unApprovedList.unshift(item);
            debugger;
          });
       // this.companyList = res;
    },        
    err => {
        });
	}
	ngOnInit(){
        if (!this.islogged()) {
            return false;
        }
		this.SearchForm = this.formBuilder.group({
            fromDate:['',Validators.required],
            toDate:['',Validators.required]
        });
    }
    ActiveInactiveCompany(companyId, status){
        debugger;
        let Request = new ActiveRequest();
        Request.active = status;
        Request.company_id = companyId;
        this.companyservice.MakeActiveInactive(Request)
        .subscribe(res => {
            this.toastr.success('Company '+status+' Successfully', 'Success !');
          //  this._router.navigate(["/company/CompanyManagement"]);
            //window.location.reload();
            this.GetCompanyList();
        },
        err => {
            err => console.log(err)
        },
        );
    }
    ActiveInactiveCompanyGroup(status){
        debugger;
        this.checked.forEach(element => {
            let Request = new ActiveRequest();
        Request.active = status;
        Request.company_id = element;
        this.companyservice.MakeActiveInactive(Request)
        .subscribe(res => {
            this._router.navigate(["/company/CompanyManagement"]);
           
        },
        err => {
            err => console.log(err)
        },
        );
        });
        this.GetCompanyList();
    }
    DeleteCompany(){
        debugger;
        if(this.checked.length>0){
        this.checked.forEach(element => {
            let Request = new DeletecompanyRequest();
        Request.id = element;
        this.companyservice.DeleteCompany(Request)
        .subscribe(res => {
            this.toastr.success(this.checked.length+' Company deleted successfully','Success !');
          //  this._router.navigate(["/company/CompanyManagement"]);
            this.GetCompanyList();
        },
        err => {
            err => console.log(err)
        },
        );
        });
    }
    else
    {
        debugger;
        this.toastr.error('Please select at least one company','Error !');
    }
       // this.GetCompanyList();
    }
    DeleteCompanyById(id){
        let Request = new DeletecompanyRequest();
        Request.id = id;
        this.companyservice.DeleteCompany(Request)
        .subscribe(res => {
            this.toastr.success('Company deleted successfully','Success !');
           // this._router.navigate(["/company/CompanyManagement"]);
            this.GetCompanyList();
        },
        err => {
            err => console.log(err)
        },
        );
    }
  onCheckboxChange(option, event) {
    if(event.target.checked) {
      this.checked.push(option.id);
    } else {
      for(var i=0 ; i < this.companyList.length; i++) {
        if(this.checked[i] == option.id){
          this.checked.splice(i,1);
        }
      }
    }
    console.log(this.checked);
    }
    
}