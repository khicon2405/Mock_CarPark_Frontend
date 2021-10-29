import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'car', pathMatch: 'full' },
  {
    path: 'car',
    loadChildren: () =>
      import('./car-manager/car-manager.module').then(
        (m) => m.CarManagerModule
      ),
  },
  {
    path: 'booking-office',
    loadChildren: () =>
      import('./booking-office-manager/booking-office-manager.module').then(
        (m) => m.BookingOfficeManagerModule
      ),
  },
  {
    path: 'parking-lot',
    loadChildren: () =>
      import(
        '../admin-car-park/parking-lot-manager/parking-lot-manager.module'
      ).then((m) => m.ParkingLotManagerModule),
  },
  {
    path: 'ticket',
    loadChildren: () =>
      import('../admin-car-park/ticket-manager/ticket-manager.module').then(
        (m) => m.TicketManagerModule
      ),
  },
  {
    path: 'trip',
    loadChildren: () =>
      import('../admin-car-park/trip-manager/trip-manager.module').then(
        (m) => m.TripManagerModule
      ),
  },
];
const MatModule = [
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    [...MatModule],
    RouterModule.forChild(routes),
  ],
})
export class AdminCarParkModule {}
