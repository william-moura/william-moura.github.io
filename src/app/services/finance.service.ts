import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  // private http: HttpClient;
  constructor(private http: HttpClient) { }
  getExpenses(): Observable<any> {
    return this.http.get("http://docker.localhost:8087/api/actions");
  }
}
