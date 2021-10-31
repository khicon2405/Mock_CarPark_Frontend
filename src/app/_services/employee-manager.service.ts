import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

import { Observable } from 'rxjs';
import { Employee } from '../_models/employee';
import { AppConstant } from '../_constants/app-constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagerService {
  constructor(private baseService: BaseService, private http: HttpClient) {}

  public getAllEmployeeApi(): Employee[] {
    return [
      {
        Id: 1,
        name: 'Tran Viet Hoang',
        email: 'hoangtran@gmail.com',
        phone: '0123456789',
        sex: '1',
        userName: 'hoangtran',
        address: 'Ha Noi',
      },
      {
        Id: 2,
        name: 'Nguyen Viet Hoang',
        email: 'hoangtran@gmail.com',
        phone: '0123456789',
        sex: '1',
        userName: 'hoangnguyen',
        address: 'Ha Noi',
      },
    ];
    // return this.baseService.get<any>(
    //   `${AppConstant.API_url}/Employee/get-all-employee`
    // );
  }

  public createNewEmployee(data: any): Observable<any> {
    return this.baseService.post<any>(
      `${AppConstant.API_url}/Employee/create-new-employee`,
      data
    );
  }

  public editEmployee(id: any, data: any): Observable<any> {
    return this.baseService.put<any>(
      `${AppConstant.API_url}/Employee/edit-employee-by-id?Id=${id}`,
      data
    );
  }

  public deleteEmployee(data: any): Observable<any> {
    return this.baseService.put<any>(
      `${AppConstant.API_url}/Employee/delete-employee?Id=${data}`,
      data
    );
  }
}
