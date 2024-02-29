// prestation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Services } from './prestation.model';
import { Sous_Services } from './prestation.model';
@Injectable({
  providedIn: 'root',
})
export class PrestationService {
  private apiUrl =
    'https://m1p10mean-saotra-rufinah-backoffice.vercel.app/prestations/prestations';
  constructor(private http: HttpClient) {}

  getAllPrestations(): Observable<Services[]> {
    return this.http.get<Services[]>(this.apiUrl);
  }
  getSousPrestations(id_service: string): Observable<Sous_Services[]> {
    return this.http.get<Sous_Services[]>(
      `https://m1p10mean-saotra-rufinah-backoffice.vercel.app/prestations/sousprestations/${id_service}`
    );
  }
  getSousServiceByid(id: string): Observable<Sous_Services[]> {
    const url = `https://m1p10mean-saotra-rufinah-backoffice.vercel.app/prestations/sousservices/${id}`;
    return this.http.get<Sous_Services[]>(url);
  }
}
