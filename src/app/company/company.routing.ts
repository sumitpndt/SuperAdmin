import { Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { SettingviewComponent } from './settingview/settingview.component';
import { CompanymangementComponent } from './companymangement/companymangement.component';
import { AddclinetsComponent } from './AddCompany/addclinets.component';

export const CompanyRoutes: Routes = [
  {
   path: '',
    children: [
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'setting',
      component: SettingComponent
    },
    {
      path: 'settingview',
      component: SettingviewComponent
    },
    {
      path: 'CompanyManagement',
      component: CompanymangementComponent
    }
    // },
    // {
    //   path: 'AddCompany',
    //   component: AddclinetsComponent
    // }
    
    ]
  }
];