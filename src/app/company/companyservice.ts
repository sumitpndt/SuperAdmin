import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import {Common} from '../Common';
import {RegisterRequest, CompanyList,CompanyUpdateRequest, BaseResult, ActiveRequest,FilterRequest,CompanyfilterList, DeletecompanyRequest, companyPlanList} from '../company/CompanyContracts';

@Injectable()
export class Companyservice{
    constructor(private http: Http) {
    }
    register(register: RegisterRequest): Observable<string> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let body = JSON.stringify(register);

        return this.http
            .post(Common.baseApi + "auth/clientcompanyadd", body, { headers: headers })
            .map(r => r.json())
            .catch(this.handlError);
    }

    UpdateCompany(register: CompanyUpdateRequest): Observable<string> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let body = JSON.stringify(register);

        return this.http
            .post(Common.baseApi + "auth/clientcompanyedit", body, { headers: headers })
            .map(r => r.json())
            .catch(this.handlError);
    }
    
    MakeActiveInactive(Request:ActiveRequest){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let body = JSON.stringify(Request);

        return this.http
            .post(Common.baseApi + "auth/activeinactive", body, { headers: headers })
            .map(r => r.json())
            .catch(this.handlError);
    }
    DeleteCompany(Request:DeletecompanyRequest){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let body = JSON.stringify(Request);

        return this.http
            .post(Common.baseApi + "auth/clientcompanydelete", body, { headers: headers })
            .map(r => r.json())
            .catch(this.handlError);
    }
    GetCompanyList ():Observable<BaseResult<CompanyList>>{
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        return this.http.get(Common.baseApi + "auth/clientcompanyshow", { headers: headers }).map(res => {
            return res.json();
        });
    }

    GetPlanList():Observable<BaseResult<companyPlanList>>{
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        return this.http.get(Common.baseApi + "auth/companyplanshow", { headers: headers }).map(res => {
            return res.json();
        });
    }
    GetUnApprovedClients():Observable<BaseResult<CompanyList>>{
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        return this.http.post(Common.baseApi + "auth/clientcompanyunapprove", { headers: headers }).map(res => {
            return res.json();
        });
    }

    GetFilterData(Request:FilterRequest):Observable<BaseResult<CompanyList>>{
        debugger;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    let body = JSON.stringify(Request);
        return this.http.post(Common.baseApi + "auth/clientCompanyfilter",body, { headers: headers }).map(res => {
            return res.json();
        });
    }
    handlError(error: any) {
        let body = JSON.parse(error._body);
        return Observable.throw(body);
    }
}


