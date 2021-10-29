import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AllParkingLotComponent } from './all-parking-lot/all-parking-lot.component';
import { AddNewParkingLotComponent } from './add-new-parking-lot/add-new-parking-lot.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-parking-lot' },
  {
    path: 'all-parking-lot',
    component: AllParkingLotComponent,
  },
  {
    path: 'add-new-parking-lot',
    component: AddNewParkingLotComponent,
  },
];
const MatModule = [MatButtonModule]
@NgModule({
  declarations: [],
  imports: [CommonModule, [...MatModule], RouterModule.forChild(routes)],
})
export class ParkingLotManagerModule {}
