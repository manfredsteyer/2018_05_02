import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { FlightService } from "./flight.service";
import { Flight } from "../../entities/flight";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit {

    from: string;
    to: string;

    // flights: Array<Flight> = [];

    //in Service auslagern
    get flights(): Array<Flight> {
        return this.flightService.flights;
    }
    selectedFlight: Flight;

    basket: object = {   // <-- Neue Eigenschaft
        "3": true,
        "5": true
    };
    
    constructor(private flightService: FlightService) { }

    ngOnInit() { }

    search(): void {
        // this.flightService.find(this.from,  this.to);
        this.flightService.load(this.from,  this.to);
    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }
}