import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Position } from "./position"

@Injectable({
  providedIn: 'root'
})

export class PositionService {
  private url = "https://nameless-earth-78519.herokuapp.com/positions";

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(this.url)
  }
}