import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SamplePagesRoutes } from './sample-pages.routing';
import { HelperclassesComponent } from './helper-classes/hc.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { RolemangementComponent } from './rolemangement/rolemangement.component';
import { PlanmangementComponent } from './planmangement/planmangement.component';
import { ManagecmsComponent } from './managecms/managecms.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NgbdModalBasic } from '../component/modal/modal.component';
import {SamplePageService} from '../sample-pages/SamplePagesServices';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SamplePagesRoutes),
    FormsModule,
    ReactiveFormsModule,
	NgbModule	
  ],
  declarations: [
    HelperclassesComponent,
    InvoiceComponent,
    ProfileComponent,
	SettingComponent,
	//NgbdModalBasic,
    RolemangementComponent,
    PlanmangementComponent,
	ManagecmsComponent,
    TimelineComponent
  ],
  providers:[SamplePageService]
})

export class SamplePagesModule {}