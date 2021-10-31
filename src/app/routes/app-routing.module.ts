import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../shared/component/error-page/error-page.component';
import { AdCarparkLayoutComponent } from '../theme/ad-carpark-layout/ad-carpark-layout.component';
import { AdHrmLayoutComponent } from '../theme/ad-hrm-layout/ad-hrm-layout.component';
import { AuthGuard } from '../_core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./sessions/sessions.module').then((m) => m.SessionsModule),
  },
  {
    //  canActivate: [AuthGuard],
    path: 'admin-hrm',
    component: AdHrmLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin-hrm/admin-hrm.module').then((m) => m.AdminHRMModule),
      },
    ],
  },
  {
    // canActivate: [AuthGuard],
    path: 'admin-car-park',
    component: AdCarparkLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../routes/admin-car-park/admin-car-park.module').then(
            (m) => m.AdminCarParkModule
          ),
      },
    ],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
