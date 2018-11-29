import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private _registerUrl = `${environment.api}/auth/register`;
  
  constructor(private http: HttpClient) { }

  getFaqs(user)
  {
    return this.http.post<any>(this._registerUrl,user);
  }

}
