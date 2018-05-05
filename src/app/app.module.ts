import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlightBookingModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent
,
    HomeComponent
],
  providers: [
    { provide: FlightService, useClass: FlightService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

