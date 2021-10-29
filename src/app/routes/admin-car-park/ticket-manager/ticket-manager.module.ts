import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTicketComponent } from './all-ticket/all-ticket.component';
import { AddNewTicketComponent } from './add-new-ticket/add-new-ticket.component';

import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {path: '', redirectTo: 'all-ticket', pathMatch: 'full'},
  { path: 'all-ticket', component: AllTicketComponent },
  {
    path: 'add-new-ticket',
    component: AddNewTicketComponent,
  },
];
const MatModule =[MatButtonModule]
@NgModule({
  declarations:[],
  imports: [CommonModule, [...MatModule], RouterModule.forChild(routes)],
})
export class TicketManagerModule {}
