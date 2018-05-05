import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Flight } from "../../entities/flight";
import { environment } from "../../../environments/environment";

@Injectable()
export class FlightService {

flights: Flight[] = [];

constructor(private http: HttpClient) {
}

load(from: string, to: string): void{
    this.find(from, to).subscribe(
        flights=>{this.flights = flights},
err => {console.error('Text', err);}
    )
}

    find(from: string, to: string): Observable<Flight[]> {
        let url = 'http://www.angular.at/api/flight';

        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = new HttpParams()
                            .set('from', from)
                            .set('to', to);

        return this.http.get<Flight[]>(url, {headers, params});
    }
}
