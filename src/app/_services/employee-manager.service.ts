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

  public getAllEmployeeApi(): Observable<Employee> {
    // return [
    //   {
    //     Id: 1,
    //     Name: 'Tran Viet Hoang',
    //     Email: 'hoangtran@gmail.com',
    //     Phone: '0123456789',
    //     Sex: '1',
    //     userName: 'hoangtran',
    //     Address: 'Ha Noi',
    //   },
    //   {
    //     Id: 2,
    //     Name: 'Tran Viet Hoang',
    //     Email: 'hoangtran@gmail.com',
    //     Phone: '0123456789',
    //     Sex: '1',
    //     userName: 'hoangtran',
    //     Address: 'Ha Noi',
    //   },
    //   {
    //     Id: 3,
    //     Name: 'Tran Viet Hoang',
    //     Email: 'hoangtran@gmail.com',
    //     Phone: '0123456789',
    //     Sex: '1',
    //     userName: 'hoangtran',
    //     Address: 'Ha Noi',
    //   },
    //   {
    //     Id: 4,
    //     Name: 'Tran Viet Hoang',
    //     Email: 'hoangtran@gmail.com',
    //     Phone: '0123456789',
    //     Sex: '1',
    //     userName: 'hoangtran',
    //     Address: 'Ha Noi',
    //   },
    // ];
    return this.baseService.get<any>(
      `${AppConstant.API_url}/Employee/get-all-employee`
    );
  }

  public createNewEmployee(data: any): Observable<any> {
    return this.baseService.post<any>(
      `${AppConstant.API_url}/Employee/create-new-employee`,
      data
    );
  }

  public editEmployee(id:any, data:any):Observable<any> {
    return this.baseService.put<any>(`${AppConstant.API_url}/Employee/edit-employee-by-id?Id=${id}`,data)
  }

  public deleteEmployee(data: any): Observable<any> {
    return this.baseService.put<any>(
      `${AppConstant.API_url}/Employee/delete-employee?Id=${data}`,
      data
    );
  }
}
