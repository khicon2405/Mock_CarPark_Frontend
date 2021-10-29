import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTripComponent } from './all-trip/all-trip.component';
import { AddNewTripComponent } from './add-new-trip/add-new-trip.component';

import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', redirectTo: 'all-trip', pathMatch: 'full' },
  {
    path: 'all-trip',
    component: AllTripComponent,
  },
  {
    path: 'add-new-trip',
    component: AddNewTripComponent,
  },
];
const MatModule = [MatButtonModule];
@NgModule({
  declarations: [],
  imports: [CommonModule, [...MatModule], RouterModule.forChild(routes)],
})
export class TripManagerModule {}
