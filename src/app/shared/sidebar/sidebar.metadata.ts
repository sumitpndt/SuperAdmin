import { Type } from "@angular/compiler/src/core";

// Sidebar route metadata
export interface RouteInfo {
    path: string;
    component?: any;
    title: string;
    icon: string;
    class: string;
    label: string;
    labelClass: string;
    extralink: boolean;
    submenu : RouteInfo[];
}
