import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const clone = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
      return next.handle(clone);
    } else {
      return next.handle(request);
    }
  }
}

