import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class F1apiService {

  constructor(private http: HttpClient) { }

  date: Date = new Date();
  year: number = this.date.getFullYear();

  getDriverStandings(): Observable<any> {
    return this.http.get(
      'https://ergast.com/api/f1/current/driverStandings.json'
    );
  }
  getCalendar(): Observable<any> {
    return this.http.get(`https://ergast.com/api/f1/2023.json`);
  }
}
