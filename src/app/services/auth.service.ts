import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Common } from '../Common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = `${Common.baseApi}auth/register`;
  private _loginUrl = `${Common.baseApi}auth/login`;
  private _forgotUrl = `${Common.baseApi}auth/forgetpassword`;
  private _resetpasswordUrl = `${Common.baseApi}auth/resetpassword`;
  private _companyproUrl = `${Common.baseApi}auth/companyprofile`;
  private _companysettUrl = `${Common.baseApi}auth/companysetting`;
  private _companysettingviewUrl=`${Common.baseApi}auth/companysettingview`;
  private _faqUrl =`${Common.baseApi}auth/faqshow`;
  private _suportallUrl=`${Common.baseApi}auth/suportshow`;

  constructor(private http: HttpClient) { }
  public isAuthenticated(): boolean {
    var item = localStorage.getItem("token");
    var id = localStorage.getItem("userid");
    if (item != 'undefined' && item != null && id !=null) {
        return true;
    } else {
        return false;
    }
}


  registerUser(user)
  {
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user)
  {
    //console.log(user);
    return this.http.post<any>(this._loginUrl,user);
  }

  forgotUser(user)
  {
    //console.log(user);
    return this.http.post<any>(this._forgotUrl,user);
  }

  resetpasswordUser(user)
  {
    //console.log(user);
    return this.http.post<any>(this._resetpasswordUrl,user);
  }

  companyprofileUser(user)
  {
    return this.http.post<any>(this._companyproUrl,user);
  }

  companysettingUser(user)
  {
    return this.http.post<any>(this._companysettUrl,user);
  }

  companysettingviewUser(user)
  {
    return this.http.post<any>(this._companysettingviewUrl,user);
  }

  faqallUser(user)
  {
    return this.http.post<any>(this._faqUrl,user);
  }

  suportallUser(user)
  {
    return this.http.post<any>(this._suportallUrl,user);
  }

  loggedIn()
  {
    return !!localStorage.getItem("token");
  }

  getToken()
  {
    return localStorage.getItem("token");
  }

  removeToken()
  {
    return localStorage.removeItem("token");
  }
}
