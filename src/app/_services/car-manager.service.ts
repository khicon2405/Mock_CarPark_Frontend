import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../_models/car.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CarManagerService {
  constructor(private baseService: BaseService) {}

  public getAllCar(): Car[] {
    return [
      {
        licensePlate: '30A-1234',
        carType: 'Honda',
        carColor: 'Red',
        company: 'Hoang Long',
        parkId: 'Bai so 1',
      },
      {
        licensePlate: '29A-1234',
        carType: 'BWV',
        carColor: 'Blue',
        company: 'Ha Noi',
        parkId: 'Bai so 2',
      },
      {
        licensePlate: '70B-1234',
        carType: 'Toyota',
        carColor: 'Pink',
        company: 'TP HCM',
        parkId: 'Bai so 4',
      },
      {
        licensePlate: '30A-1234',
        carType: 'Honda',
        carColor: 'Red',
        company: 'Hoang Long',
        parkId: 'Bai so 1',
      },
    ];
  }
}
