import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  baseUrl = environment.API_ROOT;

  constructor(public http: HttpClient) {}

  get(url: string, getParams?: string | {}, config?: any): Observable<any> {
    let options = config || {};
    if (getParams && typeof getParams === 'string') {
      url += '?' + getParams.toString();
    } else {
      options = { params: getParams };
    }
    return this.http.get(this.baseUrl + url, options).pipe(
      map((result: any) => {
        console.log(result);
        if (result) {
          if (result.code && result.code === 200) {
            return result;
          } else {
            this.errorHandle(result.massage || '未知错误');
          }
        }
      })
    );
  }

  post(url: string, params: any, myheaders?: any): Observable<any> {
    const headers = myheaders || {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.post(this.baseUrl + url, params, headers).pipe(
      map((result: any) => {
        if (result) {
          if (result.success) {
            return result.machinesetstate;
          } else {
            this.errorHandle(result.meg);
          }
        }
      })
      // catchError(this.handleError)
    );
  }

  post1(url: string, params: any): Observable<any> {
    const headers = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.post(this.baseUrl + url, params, headers).pipe(
      map((result: any) => {
        if (result) {
          if (result.success) {
            return result;
          } else {
            this.errorHandle(result.meg);
          }
        }
      })
    );
  }

  errorHandle(ErrorMassage: any) {
    // this.message.create('error', ErrorMassage);
  }

  private handleError(error: any) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
    // }
    // return error;
  }
}
