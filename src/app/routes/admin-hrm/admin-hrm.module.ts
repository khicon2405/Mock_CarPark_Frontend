import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  PopupDeleteEmployeeComponent,
  PopupEditEmployeeComponent,
} from './all-employee/popup-all-employee/popup-all-employee.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-employee',
    pathMatch: 'full',
  },
  {
    path: 'all-employee',
    component: AllEmployeeComponent,
  },
  {
    path: 'add-new-employee',
    component: NewEmployeeComponent,
  },
];
const MatModule = [
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule,
];
@NgModule({
  declarations: [
    AllEmployeeComponent,
    NewEmployeeComponent,
    PopupEditEmployeeComponent,
    PopupDeleteEmployeeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    [...MatModule],
  ],
})
export class AdminHRMModule {}
