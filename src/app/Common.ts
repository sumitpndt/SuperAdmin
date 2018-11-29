import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
export class Common
{
    static baseApi = "http://www.webdevelopmenttesting.com/dispatch/apidev/public/api/";
   // static baseApi = "http://www.webdevelopmenttesting.com/dispatch/apitest/public/api/";
  // static baseApi ="http://www.webdevelopmenttesting.com/dispatch/apiprod/public/api/";
    static baseImageUrl = "http://www.webdevelopmenttesting.com/dispatch/apidev";
    static emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
}


@Pipe({
  name: 'filter',
  pure: false 
})
export class FilterPipe implements PipeTransform {
  
  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter){
      return items;
    }

    if (!Array.isArray(items)){
      return items;
    }

    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);

      if (defaultFilter) {
        return items.filter(item =>
            filterKeys.reduce((x, keyName) =>
                (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
      }
      else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
          });
        });
      }
    }
  }
}