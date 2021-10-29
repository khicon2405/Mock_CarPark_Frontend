import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { AddNewBookingComponent } from './add-new-booking/add-new-booking.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {
  PopupDeleteCarComponent,
  PopupEditCarComponent,
} from './popup-booking/popup-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: '', redirectTo: 'all-booking', pathMatch: 'full' },
  {
    path: 'all-booking',
    component: AllBookingComponent,
  },
  {
    path: 'add-new-booking',
    component: AddNewBookingComponent,
  },
];
const MatModule = [
  MatTableModule,
  MatFormFieldModule,

  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatOptionModule,
  MatDialogModule,
  MatInputModule,
  MatRadioModule,
  // MatFormFieldModule,
  MatSelectModule,
];
@NgModule({
  declarations: [
    AllBookingComponent,
    AddNewBookingComponent,
    PopupEditCarComponent,
    PopupDeleteCarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    [...MatModule],
    RouterModule.forChild(routes),
  ],
})
export class BookingOfficeManagerModule {}
