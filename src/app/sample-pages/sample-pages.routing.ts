import { Routes } from '@angular/router';

import { HelperclassesComponent } from './helper-classes/hc.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { RolemangementComponent } from './rolemangement/rolemangement.component';
import { PlanmangementComponent } from './planmangement/planmangement.component';
import { ManagecmsComponent } from './managecms/managecms.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NgbdModalBasic } from '../component/modal/modal.component';

export const SamplePagesRoutes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'helperclasses',
      component: HelperclassesComponent,
      data: {
        title: 'Helper Classes',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Helper Classes'}]
      }
    }, 
    {
      path: 'invoice',
      component: InvoiceComponent,
      data: {
        title: 'Invoice',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Invoice Page'}]
      }
    }, 
    {
      path: 'profile',
      component: ProfileComponent,
      data: {
        title: 'Profile',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Profile Page'}]
      }
    }, 
    {
      path: 'setting',
      component: SettingComponent,
      data: {
        title: 'Setting',
        urls: [{title: 'Dashboard',url: '/setting'},{title: 'Setting Page'}]
      }
    }, 
    {
      path: 'rolemangement',
      component: RolemangementComponent,
      data: {
        title: 'Rolemangement',
        urls: [{title: 'Dashboard',url: 'rolemangement'},{title: 'Rolemangement Page'}]
      }
    }, 
    {
      path: 'planmangement',
      component: PlanmangementComponent,
      data: {
        title: 'Plan mangement',
        urls: [{title: 'Dashboard',url: '/planmangement'},{title: 'Plan mangement'}]
      }
    }, 
    {
      path: 'managecms',
      component: ManagecmsComponent,
      data: {
        title: 'Manage CMS',
        urls: [{title: 'Dashboard',url: 'managecms'},{title: 'Manage CMS Page'}]
      }
    }, 
    {
      path: 'modal',
      component: NgbdModalBasic,
      data: {
        title: 'Modal',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Modal'}]
      }
    },
    {
      path: 'timeline',
      component: TimelineComponent,
      data: {
        title: 'Timeline',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'Timeline Page'}]
      }
    }]
  }
];
