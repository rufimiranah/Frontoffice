import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RdvService {
  constructor(private http: HttpClient) {}
  getRdvs(employeeId: string): Observable<any> {
    return this.http.get(
      `https://m1p10mean-saotra-rufinah-backoffice.vercel.app/rendezvous/dates/${employeeId}`
    );
  }
}
