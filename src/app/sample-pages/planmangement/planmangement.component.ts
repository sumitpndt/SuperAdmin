import { Component, OnInit, AfterViewInit ,ViewContainerRef} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {SamplePageService} from '../SamplePagesServices';
import {companyPlan, DeletePlanRequest,AddPlanRequest, EditPlanRequest} from '../SamplePagesContract';
import { ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { ToastsManager } from 'ng6-toastr/ng2-toastr';
@Component({
	selector: 'ngbd-modal',
	templateUrl: 'planmangement.component.html',
styleUrls: ['./planmangement.component.css']	
})
export class PlanmangementComponent implements OnInit{
	closeResult: string;
  public PlanId:Number;
  Planform:FormGroup;
  EditPlanform:FormGroup;
  submitted = false;
    err_message : string;
    userDetails:Array<AddPlanRequest>;
    public err_noogloginmsg:string;
    public err_noogappmsg:string;
    public err_price:string;
 
  @ViewChild('content2') content2: ElementRef;
  @ViewChild('content') content: ElementRef;
  @ViewChild('content1') content1: ElementRef;
  @ViewChild('EditClose') closeBtn:ElementRef;
  modalReference: any ;
  modalReference1 :any;
  constructor(private _auth:AuthService,private toastr:ToastsManager,private vcr: ViewContainerRef, private _router : Router,private _app : AppComponent, private formBuilder: FormBuilder,private modalService: NgbModal, private modalService2: NgbModal, private sampleService:SamplePageService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.GetcompanyPlanList();
  } 
  islogged() {
    if (!this._auth.isAuthenticated()) {
       this._router.navigate(['/authentication/login'])
        return false;
    }
    return true;
  }
  ngOnInit(){

    if (!this.islogged()) {
      return false;
  }
  
    this.Planform = this.formBuilder.group({
      plan_name :['',Validators.required ],
      noofuser: ['', Validators.required],
      noofapp:['',Validators.required],
      price:['',Validators.required]
    });

    this.EditPlanform = this.formBuilder.group({
      index: [{value: null, disabled:true}],
      plan_name :['',Validators.required ],
      noofuser: ['', Validators.required],
      noofapp:['',Validators.required],
      price:['',Validators.required]
    });
  }

  get UpdatePlanData() { return this.EditPlanform.controls; }
  onPlanUpdate() {
   // since field is disabled, we need to use 'getRawValue'
    debugger;
     let index = this.EditPlanform.getRawValue().index
    if(index != null) {
      this.UpdatePlan( index);
    } else {
     // this.userDetails.push(form.value)      
    }
   // this.EditPlanform.reset(); // reset form to empty
  }
  private closeModal(): void {
    this.closeBtn.nativeElement.click();
}
  UpdatePlan( id){
    debugger;
    this.submitted = true;
    if (this.EditPlanform.invalid) {
        return;
    }
    if(!isNaN(this.EditPlanform.value['noofuser']))
    {
      this.err_noogloginmsg ="";
      if(!isNaN(this.EditPlanform.value['noofapp']))
      {
        this.err_noogappmsg="";
        if(!isNaN(this.EditPlanform.value['price']))
      {
    this._app.loading = true;
    let Request = new EditPlanRequest();
    Request = this.EditPlanform.value;
    Request.id = id;
    this.sampleService.UpdatePlans(Request)
    .subscribe( 
    res => {
      debugger;
      this.toastr.success('Plan Updated Successfully', 'Success!');
        this.GetcompanyPlanList();
      this.modalReference.close();
    },
    err => {
        err => console.log(err)
    },
    );
  }
  else{
    this.err_price = "Price should be numeric !";
  }
}
else
{
  this.err_noogappmsg = "No of App should be numeric !";
}

}
else
{
this.err_noogloginmsg = "No of User should be numeric !";
}  
}

  // userEdit(user, i) {
  //   debugger;
  //   this.EditPlanform.setValue({
  //     index: i,
  //     plan_name :['',Validators.required ],
  //     noofuser: ['', Validators.required],
  //     noofapp:['',Validators.required],
  //     price:['',Validators.required]
  //   })
  // }
	  open2(content1, plan) {
      debugger; 
    // this.PlanId = plan;
    this.EditPlanform.setValue({
      index: plan.id,
      plan_name :plan.plan_name,
      noofuser: plan.noofuser,
      noofapp:plan.noofapp,
      price:plan.price
    })
    this.modalReference = this.modalService.open(content1);
   this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open3(content) {
    debugger; 
    this.modalReference1 = this.modalService.open(content);
 this.modalReference1.open(content).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
open4(content, plan) {
  debugger; 
this.PlanId = plan;
this.modalService.open(content).result.then((result) => {
  this.closeResult = `Closed with: ${result}`;
}, (reason) => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
});
}
  open(content) {
    this.modalService2.open(content, { windowClass: 'dark-modal' });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  get PlanData() { return this.Planform.controls; }

  AddPlan(){
    debugger;

        this.submitted = true;
        if (this.Planform.invalid) {
            return;
        }
  if(!isNaN(this.Planform.value['noofuser']))
  {
    this.err_noogloginmsg ="";
    if(!isNaN(this.Planform.value['noofapp']))
    {
      this.err_noogappmsg="";
      if(!isNaN(this.Planform.value['price']))
    {
      this.err_price="";
      this._app.loading = true;
        let Request = new AddPlanRequest();
        Request.plan_name = this.Planform.value['plan_name'];
        Request.price = this.Planform.value['price'];
        Request.noofuser = this.Planform.value['noofuser'];
        Request.noofapp = this.Planform.value['noofapp'];
        this.sampleService.AddPlans(Request)
        .subscribe( 
        res => {
          this.toastr.success('Plan Added Successfully', 'Success!');
            this.GetcompanyPlanList();
            this.modalReference1.close();
        },
        err => {
            err => console.log(err)
        },
        );
      }
      else{
        this.err_price = "Price should be numeric !";
      }
    }
    else
    {
      this.err_noogappmsg = "No of App should be numeric !";
    }

  }
  else
  {
    this.err_noogloginmsg = "No of User should be numeric !";
  }   
}


  public planList:Array<companyPlan> = [];
  GetcompanyPlanList(){
    this.planList=[];
    this.sampleService.GetPlanList().subscribe(res=>{
        res.data.company_plan.forEach(item => {
              this.planList.unshift(item);
            });
    },        
    err => {
        err => console.log(err);
    });
    
}

DeletePlanId(id){
  let Request = new DeletePlanRequest();
  Request.id = id;
  this.sampleService.DeletePlan(Request)
  .subscribe(res => {
    this.toastr.warning('Plan Delete Successfully', 'Alert!');
      this.GetcompanyPlanList();
     // this.content2.nativeElement.Closed();
  },
  err => {
      err => console.log(err)
  },
  );
}

	
}