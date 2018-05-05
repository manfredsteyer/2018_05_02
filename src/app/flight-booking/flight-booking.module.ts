import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule } from "@angular/router";
import { FlightBookingRoutes } from "./flight-booking.routing";
import { PassengerSearchComponent } from "./passenger-search/passenger-search.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        FlightBookingRoutes
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        PassengerSearchComponent
],
    providers:[
    ],
    exports: [
        FlightSearchComponent
    ]
    })
    
    export class FlightBookingModule {
}
