import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryData } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // solution 2
  constructor(private http: HttpClient) {}
  getData(): Observable<CountryData> {
    return this.http
      .get<CountryData>('./assets/data.json')
      .pipe(map((data: CountryData) => data));
  }
}
