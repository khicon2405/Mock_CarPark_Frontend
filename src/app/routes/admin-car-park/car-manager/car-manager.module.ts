import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllCarComponent } from './all-car/all-car.component';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {
  PopupDeleteCarComponent,
  PopupEditCarComponent,
} from './popup-car/popup-car.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
const routes: Routes = [
  { path: '', redirectTo: 'all-car', pathMatch: 'full' },
  { path: 'all-car', component: AllCarComponent },
  { path: 'add-new-car', component: AddNewCarComponent },
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
    AllCarComponent,
    AddNewCarComponent,
    PopupEditCarComponent,
    PopupDeleteCarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild(routes),
    [...MatModule],
  ],
  entryComponents: [PopupEditCarComponent, PopupDeleteCarComponent],
})
export class CarManagerModule {}
