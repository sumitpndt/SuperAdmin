import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import {Common} from '../Common';
import { HttpClient, HttpHeaders,HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import {BaseResult,companyPlan,companyPlanList,profileImageresponse,EditProfileRequest,UserProfilelist,Result,DeletePlanRequest,EditPlanRequest, AddPlanRequest} from '../../app/sample-pages/SamplePagesContract';

@Injectable()
export class SamplePageService{

    constructor(private http: Http) {
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

    DeletePlan(Request:DeletePlanRequest):Observable<string>
    {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
      let body = JSON.stringify(Request);
        return this.http.post(Common.baseApi + "deletePlan",body, { headers: headers }).map(res => {
            return res.json();
        });
    }
    AddPlans(Request: AddPlanRequest): Observable<string> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let body = JSON.stringify(Request);

        return this.http
            .post(Common.baseApi + "addPlan", body, { headers: headers })
            .map(r => r.json())
            .catch(this.handlError);
    }
    UpdatePlans(Request: EditPlanRequest): Observable<Result> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let body = JSON.stringify(Request);

        return this.http
            .post(Common.baseApi + "editPlan", body, { headers: headers })
            .map(r => r.json())
            .catch(this.handlError);
    }

    uploadProfileImage(file: File, id): Observable<profileImageresponse> {
        debugger;
                let formData = new FormData();
                formData.append('image', file);
                formData.append('id',id);
                let params = new HttpParams();
            
                const options = {
                  params: params,
                  reportProgress: true,
                };
                return this.http.post(Common.baseApi +"auth/editProfileimage", formData,options).map(r=>r.json()).catch(this.handlError);
              }
    
              GetProfilebyId(id):Observable<BaseResult<UserProfilelist>>{
                let headers = new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                });
            
                return this.http.get(Common.baseApi + "auth/showProfile?id="+id, { headers: headers }).map(res => {
                    return res.json();
                });
              }

              UpdateProfile(Request: EditProfileRequest): Observable<string> {
                let headers = new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                });
        
                let body = JSON.stringify(Request);
        
                return this.http
                    .post(Common.baseApi + "auth/editProfile", body, { headers: headers })
                    .map(r => r.json())
                    .catch(this.handlError);
            }
    handlError(error: any) {
        let body = JSON.parse(error._body);
        return Observable.throw(body);
    }
}
