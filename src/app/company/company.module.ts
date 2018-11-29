import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { SettingviewComponent } from './settingview/settingview.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CompanyRoutes } from './company.routing';
import { CompanymangementComponent } from './companymangement/companymangement.component';
import { AddclinetsComponent } from './AddCompany/addclinets.component';
import { Companyservice } from './companyservice';
import {FilterPipe} from '../Common';
@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild(CompanyRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    ProfileComponent,
    SettingComponent,
    SettingviewComponent,
    CompanymangementComponent,
    AddclinetsComponent,
    FilterPipe
  ],
  providers:[Companyservice]
})
export class CompanyModule {}