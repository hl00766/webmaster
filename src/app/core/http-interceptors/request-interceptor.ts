import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requestHandle(req);
    return next.handle(req);
  }

  requestHandle(request: HttpRequest<any>) {
    console.log(environment);

    // 某些请求加权
    request.clone({
      headers: request.headers.set('Authorization', 'authToken'),
    });
    // 某些请求排权
    // console.log('发送ajax请求');
    // console.log(request);
  }
}
