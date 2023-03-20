import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HTTP_ERROR } from '../config/errors';

@Injectable()
export class ResponsetInterceptor implements HttpInterceptor {
  constructor(
    private router: Router // private message: NzMessageService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(tap(this.responseFilter.bind(this), this.errorHandle.bind(this)));
  }

  responseFilter(event: HttpEvent<any>) {
    console.log('event', event);

    if (event instanceof HttpResponse) {
      if (event.status !== 200) {
        console.error(
          event.url,
          `请求失败，失败代码：${event.status}, 失败原因：${event.statusText}`
        );
      }
    }
  }

  errorHandle(ErrorMassage: HttpErrorResponse) {
    console.log('ErrorMassage', ErrorMassage);

    let err: string;
    err = HTTP_ERROR[ErrorMassage.status];
    switch (ErrorMassage.status) {
      case 401: // 鉴权失败
        this.router.navigate(['login']);
        err = '登陆超时';
        break;
    }
    // this.message.create('error', err || '连接出错');
    console.error(ErrorMassage.url, ErrorMassage.message);
  }
}
