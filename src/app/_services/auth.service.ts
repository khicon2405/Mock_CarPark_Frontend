import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {VerifyTokenResponse} from '../_models';

import { BaseService } from '../_services/base.service';
import { CookieService } from 'ngx-cookie-service';
import { AppConstant } from '../_constants/app-constant';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private baseService: BaseService,
    private cookieService: CookieService
  ) {}

  login(postData: any): Observable<any> {
    return this.baseService.post<any>(
      `${AppConstant.API_url}/auth/login`,
      postData
    );
  }

  verifyToken(token: string): Observable<VerifyTokenResponse> {
    return this.baseService.get<VerifyTokenResponse>(`${AppConstant.API_url}`, {
      token,
    });
  }
  logout() {
    this.cookieService.deleteAll();
  }
}
