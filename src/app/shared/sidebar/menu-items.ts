import { RouteInfo } from './sidebar.metadata';
import { ListFaqComponent } from '../../company/list-faq/list-faq.component';
import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
import { Dashboard1Component } from '../../dashboards/dashboard1/dashboard1.component';
import { CompanymangementComponent } from '../../company/companymangement/companymangement.component';
import { AddclinetsComponent } from '../../company/AddCompany/addclinets.component';

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard/dashboard1',   title: 'Dashboard', icon: 'mdi mdi-gauge', class: '', label: '', labelClass: '', extralink: false,
        submenu: []
    },
    {
  
        path: '/company/CompanyManagement',   title: 'Company Management', icon: 'mdi mdi-gender-transgender', class: '', label: '', labelClass: '', extralink: false,
        submenu: []
    },
    {
  
        path: '/sample-pages/planmangement',   title: 'Plan Management', icon: 'mdi mdi-dropbox', class: '', label: '', labelClass: '', extralink: false,
        submenu: []
    },
    {
        path: ' ', title: 'Tickets', icon: 'mdi mdi-chart-arc', class: '', label: '', labelClass: '', extralink: false,
		submenu: []
    },
    {
        path: ' ', title: 'Finance Management', icon: 'mdi mdi-chart-bar', class: '', label: '', labelClass: '', extralink: false,
		submenu: []
    },
    {
        path: '/sample-pages/profile', title: 'Edit Profile', icon: 'mdi mdi-account', class: '', label: '', labelClass: '', extralink: false,
		submenu: []
    },
    {
        path: '/authentication/login2', title: 'Logout', icon: 'mdi mdi-power', class: '', label: '', labelClass: '', extralink: false,
		submenu: []
    }   
];

