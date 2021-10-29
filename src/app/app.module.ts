import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionsModule } from './routes/sessions/sessions.module';
import { AdCarparkLayoutComponent } from './theme/ad-carpark-layout/ad-carpark-layout.component';
import { AdHrmLayoutComponent } from './theme/ad-hrm-layout/ad-hrm-layout.component';
import { AdminHRMModule } from './routes/admin-hrm/admin-hrm.module';
import { MaterialModule } from './shared/material.module';
import { AdminCarParkModule } from './routes/admin-car-park/admin-car-park.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, AdCarparkLayoutComponent, AdHrmLayoutComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SessionsModule,
    AdminHRMModule,

    AdminCarParkModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
