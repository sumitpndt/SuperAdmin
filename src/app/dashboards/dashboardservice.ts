import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import {Common} from '../Common';
import { BaseResult, CompanyCountResult} from '../dashboards/dashboardContract';

@Injectable()
export class DashboardService{
    constructor(private http: Http) {
    }
    GetCompanyCount():Observable<BaseResult<CompanyCountResult>>{
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        return this.http.get(Common.baseApi + "auth/clientCompanycount", { headers: headers }).map(res => {
            return res.json();
        });
    }
   
    handlError(error: any) {
        let body = JSON.parse(error._body);
        return Observable.throw(body);
    }
}


